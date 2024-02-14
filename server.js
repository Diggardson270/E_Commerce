const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use("/images", express.static('images'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'))
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/products.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'))
});

app.listen(port, () => (
    console.log(`Server is running at http://localhost:${port}`)
));