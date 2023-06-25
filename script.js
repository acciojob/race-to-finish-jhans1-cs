window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved`);
    }, randomTime);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.log(error);
  });