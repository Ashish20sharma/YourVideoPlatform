require("module-alias/register");

//require modules
const http=require("http");
const express=require("express");
const path=require("path");
const session=require("express-session");
const socketio=require("socket.io");

const app=express();
const server=http.createServer(app);
//Attack socket.io to the HTTP server
const io=socketio(server);

module.exports={io,app};

// socketio connection handle
io.on("connection",(socket)=>{
    console.info("A Clint Connected.")
})

server.listen(4000,()=>{
    console.log("server listening port 4000");
})