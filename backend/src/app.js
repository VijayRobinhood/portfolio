require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const path = require('path')

const contactRoutes = require('./routes/contact')
const resumeRoutes = require('./routes/resume')
const { contactLimiter, generalLimiter } = require('./middleware/rateLimiter')
const { initDb } = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet({ contentSecurityPolicy: false }))

// CORS
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'http://localhost:3000',
  'http://localhost:5173',
]
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}))

app.use(compression())
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Trust proxy for correct IP
app.set('trust proxy', 1)

// General rate limiter
app.use('/api', generalLimiter)

// Routes
app.use('/api/contact', contactLimiter, contactRoutes)
app.use('/api/resume', resumeRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
  })
}

// Init DB and start server
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
    console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`)
  })
})

module.exports = app
