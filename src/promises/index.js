const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey, Lo logramos");
    } else {
      reject("Rayos, NO lo logramos");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Wooops");
      reject("error");
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// el metodo all dentro de promise recibe un arreglo de promesas y este ejecutara el grupo de promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
