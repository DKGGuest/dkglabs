
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json()); // Express has built-in JSON parsing

// Define the build directory (React frontend)
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// Serve sitemap.xml and robots.txt explicitly
app.get(["/sitemap.xml", "/robots.txt"], (req, res) => {
    const filePath = path.join(buildPath, req.path);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(`Error serving ${req.path}`, err);
            res.status(404).send("File not found");
        }
    });
});

// API: Send Email using Nodemailer
app.post("/send-email", async (req, res) => {
    const { name, email, password, organisation, query } = req.body;

    console.log("send email")
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing EMAIL_USER or EMAIL_PASS in .env");
        return res.status(500).json({ message: "Email service is not configured" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'dkgrouplabs@gmail.com',
            pass: 'gksbmjuwhzlzrgak',
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "dkgrouplabs@gmail.com",
        subject: "New User Sign-Up",
        text: `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nOrganisation: ${organisation}\nQuery: ${query}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send failed:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
});

// // Handle all other routes by serving React frontend
// app.use((req, res) => {
//     res.sendFile(path.join(buildPath, "./index.html"), (err) => {
//         if (err) {
//             console.error("Error serving index.html", err);
//             res.status(500).send("Error loading the page");
//         }
//     });
// });

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

