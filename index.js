import express from "express";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// Serve static files from the public folder
app.use(express.static('public'));

// Sample tasks data
const task = ['Buy groceries', 'Do laundry', 'Walk the dog'];

app.get('/', (req, res) => {
  res.render('index', { task });
});

app.get('/add', (req, res) => {
  console.log('using add button');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
