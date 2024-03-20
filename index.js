import express from 'express'
import { movies } from './movies.js';
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 500

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    let id = req.params.id
    let movie = movies.find(movie => movie.id === parseInt(id))
    res.json(movie)
})

app.post('/movies', (req, res) => {
    console.log(req.body)
    const newMovie = {
        id: movies.length + 1,
        movie: req.body.movie,
    }
    movies.push(newMovie)
    res.json(newMovie)
})


app.listen(port, () => console.log(`App started on port ${port}`));