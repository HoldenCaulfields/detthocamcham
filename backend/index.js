require('dotenv').config(); // Add dotenv for environment variables
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cors = require('cors');

const app = express();

// CORS settings
const allowedOrigins = ['https://detthocamcham.vercel.app', 'https://detthocamcham.onrender.com'];
app.use(cors({
    origin: allowedOrigins,
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI);

const experienceSchema = new mongoose.Schema(
    {
        username: String,
        text: String,
        mediaUrl: String,
    },
    { timestamps: true } // This adds createdAt and updatedAt fields
);

const Experience = mongoose.model('Experience', experienceSchema);

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'experience',
        allowed_formats: ['jpg', 'png', 'mp4'],
    },
});

const upload = multer({ storage });

// API endpoint
app.post('/upload', upload.single('media'), async (req, res) => {
    try {
        const { username, text } = req.body;
        const mediaUrl = req.file.path;

        const newExperience = new Experience({ username, text, mediaUrl });
        await newExperience.save();

        res.status(200).json({ message: 'Upload successful!' });
    } catch (error) {
        console.error('Error uploading data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/upload', async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(experiences);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});