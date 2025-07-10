import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 8080;
//test API endpoint
app.get('/api/v1/test', (_req, res) => {
    return res.status(200).send('Hello world');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})