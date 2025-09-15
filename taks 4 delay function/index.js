const getPromise = () => {
  const p1 = new Promise((reslove, reject) => {
    let success = true;
    if (success) {
      reslove("Operation successful");
    } else {
      reject("Operation Failed");
    }
  });
};
setTimeout(getPromise, 5000);
