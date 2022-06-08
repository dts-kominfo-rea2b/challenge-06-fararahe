// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let files = [file1, file2, file3];
  let results = [];

  files.forEach(item => {
    fs.readFile(
      item,
      {
        encoding : 'utf-8',
      },
      (err, data) => {
        if(err){
          return fnCallback(err, null);
        }

        let jsonData = JSON.parse(data);

        if(jsonData.message != undefined){
          results.push(secondWords(jsonData.message));
        }else if(Array.isArray(jsonData)){
          jsonData.forEach(item => {
            if(item.message != undefined){
              results.push(secondWords(item.message));
            }else{
              results.push(secondWords(item.data.message));
            }
          });
        }

        if(results.length == 3){
          return fnCallback(null, results);
        }
      }
    );
  });
};

const secondWords = (data) => {
  let words = data.split(' ');
  return words[1];
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
