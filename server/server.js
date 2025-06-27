import app from './app.js';
const PORT = process.env.PORT || 3099;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});
