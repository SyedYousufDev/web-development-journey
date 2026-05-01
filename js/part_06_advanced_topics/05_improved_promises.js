
function savetoDb(data) {
  return new Promise((resolve,reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}






savetoDb("abc")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("lmn");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("opq");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });