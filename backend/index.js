const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://nguyenthianh1232345:7eWC9POYJW3nd70F@cluster0.tsxs9.mongodb.net/detthocam');

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
    cloud_name: 'dgmvr9lnh',
    api_key: '255263791117579',
    api_secret: 'A-D6LcxqmWaMZkN_jbZr06Bpg0E',
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
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});