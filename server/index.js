const express = require('express');
const app = express();
const port = 3000;

const winax = require('winax');
const excel = new winax.Object('Excel.Application');
const fs = require('fs');
const { error } = require('console');


app.use(express.static('public'));
app.use(express.static('client/dist'));

app.use('/openEstimate/:fileName', (req, res) => {
    var { fileName } = req.params;
    console.log(fileName);
    excel.Visible = true;
    excel.Workbooks.Open(`C:\\Users\\lirad\\Documents\\coding\\Gyp-Fill-Enterprise\\1. Gyp-Fill Enterprise\\1. The Projects\\${fileName}\\1. The Estimates\\${fileName}.xlsm`);
    //excel.Workbooks.Open('C:\\Users\\lirad\\Documents\\example\\The Database.xlsm')
})

app.listen(port, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port}`);
})