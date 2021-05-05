const express = require('express')

app = express();
PORT = process.env.PORT || 8080




app.use('/api/write',require('./routes/serviceWriter'))


app.listen(PORT, function () {
console.log('server is up ' + PORT )


} )