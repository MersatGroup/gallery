import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema({
    album_title: String,
    posted_on: {
        type: Date,
        default: new Date()
    },
    thumbnail: String,
    images_path: String
});

const galleryModel = mongoose.model('galleryModel', gallerySchema);

export default galleryModel;