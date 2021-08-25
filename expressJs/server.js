const express = require('express');

const app = express();
// this Midleware work every url
app.use((req, res, next) => {
    console.log('Time is ', Date.now());
    next()
})

app.use(express.urlencoded({extended: true}))

// this Midleware work only user url
app.use('/user', (req, res, next) => {
    console.log("User route middleware");
    next();
})

app.get('/', (req, res) => {
    res.send({
        message: "Hello world"
    })
})
app.get('/user', (req, res) => {
    res.send({
        message: "This is user page"
    })
})

app.post('/user', (req, res) => {
    console.log(req.body); // express can automatic convert to obj 
})

app.use('/public', express.static('public')) // this url work for static files

app.listen(3000, () => console.log('Server is running on 3000 port'));



