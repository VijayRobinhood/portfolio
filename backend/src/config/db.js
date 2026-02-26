const sql = require('mssql')

const config = {
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_DATABASE || 'PortfolioDB',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
}

let pool = null

async function getPool() {
  if (!pool) {
    pool = await sql.connect(config)
  }
  return pool
}

async function initDb() {
  try {
    const db = await getPool()
    await db.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Contacts' AND xtype='U')
      CREATE TABLE Contacts (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email NVARCHAR(255) NOT NULL,
        message NVARCHAR(MAX) NOT NULL,
        ip_address NVARCHAR(50),
        created_at DATETIME DEFAULT GETDATE()
      )
    `)

    await db.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='ResumeDownloads' AND xtype='U')
      CREATE TABLE ResumeDownloads (
        id INT IDENTITY(1,1) PRIMARY KEY,
        ip_address NVARCHAR(50),
        user_agent NVARCHAR(500),
        timestamp DATETIME DEFAULT GETDATE()
      )
    `)

    await db.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Visitors' AND xtype='U')
      CREATE TABLE Visitors (
        id INT IDENTITY(1,1) PRIMARY KEY,
        ip NVARCHAR(50),
        user_agent NVARCHAR(500),
        page NVARCHAR(255),
        timestamp DATETIME DEFAULT GETDATE()
      )
    `)

    console.log('✅ Database tables initialized')
  } catch (err) {
    console.warn('⚠️  Database not available, running in offline mode:', err.message)
  }
}

module.exports = { getPool, initDb, sql }
