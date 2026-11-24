const express = require('express');
const app = express();


// Home Page
// req = Request, res = Respond

app.get('/', (req, res) => {
    res.send('Welcome to the Book Category API');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})


// Book Cats
app.get('/categories', (req, res) => (
res.json([
{id: 1, name: "Fiction"},
{id: 2, name: "Non-Fiction"}, 
{id: 3, name: "Biography"}      
])
));

app.get('/about', (req, res) => {
    res.send("Hi! My name is Aqeel & I'm learning BED");
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
})