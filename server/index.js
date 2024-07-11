import express from "express";
import { Server } from "socket.io";
import { createServer } from 'http';
import cors from 'cors';

const port = 3000;
const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));


// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST"],
//         credentials: true
//     }
// });

app.get("/", (req, res) => {
    res.send("Hello World!");
})

// io.on("connection", (socket) => {
//     console.log("User connected with Socket ID : ", socket.id);
// });

const server = createServer(app);
server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});