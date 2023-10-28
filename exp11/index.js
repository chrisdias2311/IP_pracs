const http = require('http')
const express = require('express')
const fs = require('fs')

const app = express()

// app.listen(5000, ()=>{
//     console.log('Server is running on port 5000')
// })


http.createServer((req, res)=>{
    res.write("Hello World!");
    res.end("Hello");
}).listen(5000);


// Create a new file 
fs.open('file.txt', 'w', (err, file)=>{
    if(err)
        console>log(err)
    console.log('File Created!')
});


// Append content to the fileB 
fs.appendFile('file.txt', 'Write some content', (err)=>{
    if(err)
        console.log(err)
    console.log('File Edited Successfylly!')
})

//Rename a file
fs.rename("file.txt", "newFile.txt", (err)=>{
    if(err)
        console.log(err)
    console.log("File Renamed!")
})

//Copy a file) 
fs.copyFile("newFile.txt", "copyFile.txt", (err)=>{
    if(err)
        console.log(err)
    console.log("File Copied!")
})

//Delete a file 
// fs.unlink('file.txt', (err)=>{
//     if(err)
//         console.log(err);
//     console.log("File deletd!")
// })
