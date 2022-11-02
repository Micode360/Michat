const socket  = require("socket.io");

exports.ioSetUp = server => {
    return socket(server, {
        transport: ["polling"],
        cors: {
            origin: "*",
        }
    })
}


exports.connection = io => {
    io.on("connection", socket => {
        console.log("A user is connected");

        socket.on("message", message => {
            console.log(`message from ${socket.id} : ${message}`);
        })

        socket.on("disconnect", message => {
            console.log(`socket ${socket.id} disconected`);
        })

    })
}
