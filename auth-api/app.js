const express = require("express");
import * as db from "./src/config/db/initialData.js";



const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: 'Auth-API',
        status: 'up',
        httpStatus: 200
    });

})

app.listen(PORT, () => {
    console.info(`Server 1 started successfully at port ${PORT}`);
});
