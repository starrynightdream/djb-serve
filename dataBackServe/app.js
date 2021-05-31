const path = require('path');
const express = require('express');

const app = express();

const port = 3333;

app.use('/imgSet', express.static( path.join(__dirname, '/imgSet/')))

// 等待数据的填充

app.listen(port, (err)=>{
    console.log(`run at port ${port}`);
});