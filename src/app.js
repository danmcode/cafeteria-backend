const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routerApi = require('./routes');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend Cafeteria-JS');
});

routerApi(app);

app.listen(port, ()=>{
    console.log(`App started on http://localhost:${port}`);
});