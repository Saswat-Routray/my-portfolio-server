import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
// app.use(cors({
//   origin: "https://my-portfolio-production-d0bf.up.railway.app",
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type"]
// }));

app.use(cors());

// Helpers for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Contact route (single definition)
// app.post("/api/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     await transporter.verify();

//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_TO,
//       subject: `[Contact Form] ${subject}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Optional static file fallback (for future deployment)
// app.use(express.static(path.join(__dirname, "../my-portfolio/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../my-portfolio/dist/index.html"));
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
