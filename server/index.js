import express from "express";
import { Server } from "socket.io";
import { createServer } from 'http';
import cors from 'cors';

const port = 3000;
const app = express();
app.use(cors({
    origin: [`${process.env.CLIENT_URL}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.get("/", (req, res) => {
    res.send("Hello World!");
})
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: `${process.env.CLIENT_URL}`,
        methods: ["GET", "POST"],
        credentials: true
    }
});
io.on("connection", (socket) => {
    console.log("User connected with Socket ID : ", socket.id);
});

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});