const express=require("express");
const { Socket } = require("socket.io");
const app= express();
const port=process.env.PORT || 8080;
const http=require("http").createServer();

const io=require("socket.io")(http);
console.log(io);

io.on("connection",(socket)=>{

    socket.emit("welcome","welcome to the socket")
    console.log("new client is connected!")
    socket.on("message",(message)=>{

        console.log("on message >>",message);
    });
});
io.on("message", (data) => {
    console.log(data);
  });

 
  io.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
http.listen(port,()=>{
    console.log("server is listening on " +port)
});