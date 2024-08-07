import express from 'express';

const app = express();

const PORT = 3770;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
