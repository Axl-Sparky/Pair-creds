import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import pair from './pair.js'; // Note the .js extension

const app = express();
const __path = process.cwd();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__path, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__path, '/pair.html'));
});

app.use('/code', pair);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
