const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// CORSを許可する
app.use(cors());

app.get('/', (req, res) => {
            res.json({
                id: "s20t300",
                name: "hoge",
                balance: 300
            });
        },
);

app.listen(port);
