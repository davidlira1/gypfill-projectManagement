const fsExtra = require('fs-extra');
const fs = require('fs');

var source = 'C:\\Users\\lirad\\Documents\\example';
var destination = 'C:\\Users\\lirad\\Documents\\New Estimate';
 
// copy source folder to destination
fsExtra.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
    fs.rename('C:\\Users\\lirad\\Documents\\New Estimate\\The Database.xlsm',
     'C:\\Users\\lirad\\Documents\\New Estimate\\New Estimate.xlsm', () => { 
        console.log("\nFile Renamed!\n"); 
         
      }); 
});
