const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log('Express Server Running at ', process.env.PORT);
})