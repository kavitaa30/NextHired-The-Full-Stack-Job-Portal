import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';
import path from 'path';

dotenv.config({});

const app = express();

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://nexthired-the-full-stack-job-portal.onrender.com',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute)

app.use(express.static(path.join(_dirname, "/frontend/dist")));
// Use a regular expression for the catch-all route to avoid path-to-regexp errors
app.get(/^\/((?!api\/v1\/).)*$/, (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);  
})