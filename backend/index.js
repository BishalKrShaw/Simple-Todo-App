import express from 'express'
import dotenv from 'dotenv';
import todoRouter from './routers/todoRouters.js'
import connectDB from './db/config.js';
import cors from 'cors'

dotenv.config();

// Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000

app.use("/api/todo", todoRouter)

app.listen(`${PORT}`, () => {
  console.log(`Server running on PORT ${PORT}`);
});