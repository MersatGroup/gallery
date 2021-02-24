import GalleryModel from '../models/galleryModel.js'

export const getGallery = async (req, res) => {
    try {
        const galleryModel = await GalleryModel.find();
        
        res.status(200).json(galleryModel)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const addAlbum = async (req, res) => {
    const album = req.body;
    const newAlbum = new GalleryModel(album);
    try {
        await newAlbum.save();
        res.status(200).json(newAlbum);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}