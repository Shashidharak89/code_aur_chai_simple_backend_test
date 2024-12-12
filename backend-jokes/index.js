import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('server is prajwal');

});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"A joke",
            content:"This is a joke"
        },
        {
            id:2,
            title:"Another joke",
            content:"This is another joke"
        },
        {
            id:3,
            title:"B joke",
            content:"This is b joke"
        },
        {
            id:4,
            title:"d joke",
            content:"This is d joke"
        },
        {
            id:5,
            title:"i am prajwal",
            content:"i am from karinja"
        }
    ];
    res.send(jokes);
});

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});