import app from './app.js';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3099;

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`Server is runnigng on port ${PORT}`)
});


// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});


// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});



