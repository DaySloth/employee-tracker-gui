import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.static(path.join(__dirname, './public')));



