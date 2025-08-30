const express = require('express');
const router = express.Router();
const videoController = require('../controller/videoController');

// Route to upload videos
router.post('/upload', videoController.uploadVideo)

// Route to get specific author videos
router.get('/videos', videoController.authorVideo)

router.get('/video/:id', videoController.getVideo)

// Route to delete specific video
router.delete('/delete/:id', videoController.deleteVideo)

// Route to reformat video
router.post('/reformat', videoController.reformatVideo)

// Route to download video
router.post('/download', videoController.downloadVideo)
module.exports = router;