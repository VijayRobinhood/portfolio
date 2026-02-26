const router = require('express').Router()
const { logDownload, serveResume } = require('../controllers/resumeController')

router.post('/download', logDownload)
router.get('/file', serveResume)

module.exports = router
