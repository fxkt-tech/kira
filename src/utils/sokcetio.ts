import { io } from "socket.io-client";

const socket = io("ws://localhost:8000/", {});

// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});

setInterval(() => {
    const start = Date.now();
    socket.emit("bye", () => {
        console.log(`pong (latency: ${Date.now() - start} ms)`);
    });
}, 1000);

export default socket;