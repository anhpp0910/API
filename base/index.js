setTimeout(function () {
  console.log("Show ad");
}, 0);

// đồng bộ

console.log(1);
console.log(2);
console.log(3);
// bất đồng bộ

// dùng axios để lấy data từ server

axios({
  url: "https://653122f94d4c2e3f333c72a3.mockapi.io/product",
  method: "GET",
})
  .then(function (res) {
    console.log("res: ", res);
  })
  .catch(function (err) {
    console.log("err: ", err);
  });

// promise: pending, resolve, reject
