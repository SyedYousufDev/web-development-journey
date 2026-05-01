


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

savetoDb("ahmed_123")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise1: ", result);
    return savetoDb("helloworld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise2: ", result);
    return savetoDb("shradha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise3: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });