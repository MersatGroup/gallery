import express from 'express';

import { getGallery, addAlbum } from '../controllers/galleryController.js'

const router = express.Router();

router.get('/', getGallery);
router.get('/', addAlbum);

export default router;