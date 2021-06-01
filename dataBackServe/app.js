const path = require('path');
const express = require('express');

const app = express();

const port = 3333;

const fackData = [
    {
        name: 'chino',
        day: '06-01',
        img: 'default.jpg'
    },
    {
        name: 'witorika',
        day: '06-02',
        img: 'default.jpg'
    },
    {
        name: 'kuro',
        day: '06-04',
        img: 'default.jpg'
    },
    {
        name: 'shiro',
        day: '06-03',
        img: 'default.jpg'
    },
    {
        name: 'cc',
        day: '02-01',
        img: 'default.jpg'
    },
    {
        name: 'aqura',
        day: '12-01',
        img: 'default.jpg'
    },
    {
        name: 'kokoa',
        day: '11-11',
        img: 'default.jpg'
    },
];

app.use('/imgSet', express.static( path.join(__dirname, '/imgSet/')))

app.all('*', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

app.get('/djbs', (req, res) =>{
    // res.writeHead('Access-Control-Allow-Origin','*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    res.json(
        fackData
    );
});
// 等待数据的填充

app.listen(port, (err)=>{
    console.log(`run at port ${port}`);
});