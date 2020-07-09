const express = require('express');
const cors = require('cors')
const routes = require('./routes')

//require('./case-downloader')

const app = express();
app.use(cors({
  origin: 'http://example.com'
}))
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333)