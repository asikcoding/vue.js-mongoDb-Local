const express = require('express');
const app = express();
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const cors = require('cors');

//middleware
app.use(bodyParser.json());
app.use(cors());

const pegawai = require('./routes/api/pegawai')
const port = process.env.PORT || 3000;

app.use('/api/pegawai',pegawai);
app.listen(port, () => console.info(`REST API running on port ${port}`));


