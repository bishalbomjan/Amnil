function delay(ms, shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`Resolved after ${ms} ms`);
      } else {
        reject(`Rejected after ${ms} ms`);
      }
    }, ms);
  });
}

delay(2000).then(console.log("Success")).catch(console.log("Error"));
delay(1500, false).then(console.log).catch(console.error);
