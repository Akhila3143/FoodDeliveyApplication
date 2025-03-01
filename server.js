const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const cors = require("cors"); // Import CORS

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Welcome to Food delivery");
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.json({ message: "Login successful", username: user.username });
    } catch (err) {
        console.log(err);
    }
});

// Connect to MongoDB using async/await
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Akhila:Akhila123@fooddelivery.6jqcz.mongodb.net/backend?retryWrites=true&w=majority&appName=FoodDelivery", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected successfully...");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit process with failure
    }
};

// Call the connection function
connectDB();

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${PORT}`);
});
