/**
 * Created by chensiwei on 2017-4-21.
 */
const express = require('express');
const path = require('path');
const app = express();
const router = require('./router');
app.use('/', router);
app.use(express.static(path.resolve(process.cwd(), 'dist')));
app.use(express.static(path.resolve(process.cwd(), 'public')));
// console.log('---------------', process.env.NODE_ENV)
// Start server
const PORT = process.env.PORT || 3011;
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});