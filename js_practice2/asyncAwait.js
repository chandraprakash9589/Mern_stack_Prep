
debugger
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello js p1");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello js p2");
  }, 2000);
});
const handlePromise = async () => {
  console.log("Hello javascript");
  const value = await p1;
  console.log("this is promise p1111");
  console.log(value);

  const value2 = await p2;
  console.log("this is promise p2222222222");
  console.log(value2);
};

handlePromise();
