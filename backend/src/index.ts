import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute'
import path from 'path'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to database!"))

const _dirname = path.resolve()

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ meesage: "health OK!" })
})

app.use("/api/my/user", myUserRoute)

app.use(express.static(path.join(_dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
