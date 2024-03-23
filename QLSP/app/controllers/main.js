// render dssp
var idSuaSP = null;
// 1. Gọi API lấy danh sách sp
fetchArrSP();

// 2. Xoá 1 sản phẩm trên server
function xoaSP(id) {
  turnOnLoading();
  axios({
    url: `https://653122f94d4c2e3f333c72a3.mockapi.io/product/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchArrSP();
    })
    .catch(function (err) {
      console.log("err: ", err);
      turnOffLoading();
    });
}

function themSP() {
  var sp = getDataForm();
  axios({
    url: "https://653122f94d4c2e3f333c72a3.mockapi.io/product",
    method: "POST",
    data: sp,
  })
    .then(function (res) {
      $("#myModal").modal("hide");
      fetchArrSP();
    })
    .catch(function (err) {});
}

// sửa = lấy chi tiết + cập nhật

function suaSP(id) {
  // idSuaSP chứa id của sp được chọn khi user nhất btn Sửa
  idSuaSP = id;
  $("#myModal").modal("show");

  // gọi API lấy chi tiết 1 SP
  axios({
    url: `https://653122f94d4c2e3f333c72a3.mockapi.io/product/${id}`,
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      document.getElementById("TenSP").value = res.data.name;
      document.getElementById("GiaSP").value = res.data.price;
      document.getElementById("HinhSP").value = res.data.img;
      document.getElementById("MoTaSP").value = res.data.desc;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function capNhatSP() {
  var sp = getDataForm();
  axios({
    url: `https://653122f94d4c2e3f333c72a3.mockapi.io/product/${idSuaSP}`,
    method: "PUT",
    data: sp,
  })
    .then(function (res) {
      $("#myModal").modal("hide");
      fetchArrSP();
    })
    .catch(function (err) {});
}
