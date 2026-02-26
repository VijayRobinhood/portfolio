const path = require('path')
const fs = require('fs')
const { getPool, sql } = require('../config/db')

async function logDownload(req, res) {
  const ip = req.ip || req.connection.remoteAddress
  const userAgent = req.headers['user-agent'] || ''

  try {
    const pool = await getPool()
    await pool
      .request()
      .input('ip', sql.NVarChar(50), ip)
      .input('ua', sql.NVarChar(500), userAgent.substring(0, 500))
      .query('INSERT INTO ResumeDownloads (ip_address, user_agent) VALUES (@ip, @ua)')
  } catch (err) {
    console.warn('Resume log error:', err.message)
  }

  return res.json({ success: true })
}

async function serveResume(req, res) {
  // Log download
  const ip = req.ip || req.connection.remoteAddress
  const userAgent = req.headers['user-agent'] || ''
  try {
    const pool = await getPool()
    await pool
      .request()
      .input('ip', sql.NVarChar(50), ip)
      .input('ua', sql.NVarChar(500), userAgent.substring(0, 500))
      .query('INSERT INTO ResumeDownloads (ip_address, user_agent) VALUES (@ip, @ua)')
  } catch { /* silent */ }

  const resumePath = path.join(__dirname, '../../public/resume.pdf')
  if (fs.existsSync(resumePath)) {
    return res.download(resumePath, 'Vijay_Vishwakarma_Resume.pdf')
  }
  return res.status(404).json({ error: 'Resume file not found' })
}

module.exports = { logDownload, serveResume }
