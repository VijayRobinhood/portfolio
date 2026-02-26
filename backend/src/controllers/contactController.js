const { getPool, sql } = require('../config/db')

async function submitContact(req, res) {
  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  if (name.length > 255 || email.length > 255) {
    return res.status(400).json({ error: 'Input too long' })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const ip = req.ip || req.connection.remoteAddress

  try {
    const pool = await getPool()
    await pool
      .request()
      .input('name', sql.NVarChar(255), name.trim())
      .input('email', sql.NVarChar(255), email.trim())
      .input('message', sql.NVarChar(sql.MAX), message.trim())
      .input('ip', sql.NVarChar(50), ip)
      .query(
        'INSERT INTO Contacts (name, email, message, ip_address) VALUES (@name, @email, @message, @ip)'
      )

    return res.status(201).json({ success: true, message: 'Message received. Thank you!' })
  } catch (err) {
    console.error('Contact form error:', err.message)
    // Still return success to not expose DB errors; log internally
    return res.status(201).json({ success: true, message: 'Message received. Thank you!' })
  }
}

module.exports = { submitContact }
