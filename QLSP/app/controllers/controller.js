function fetchArrSP() {
  turnOnLoading();
  axios({
    url: "https://653122f94d4c2e3f333c72a3.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      renderSP(res.data);
      turnOffLoading();
    })
    .catch(function (err) {
      console.log("err: ", err);
      turnOffLoading();
    });
}

function renderSP(arrSP) {
  var htmls = "";
  arrSP.forEach(
    (sp) =>
      (htmls += `
  <tr>
  <th>${sp.id}</th>
  <th>${sp.name}</th>
  <th>${sp.price}</th>
  <th><img src="${sp.img}" width="200"></th>
  <th>${sp.desc}</th>
  <th>
  <button class="btn btn-warning mb-2" onclick="suaSP(${sp.id})">Sửa</button>
  <button class="btn btn-danger" onclick="xoaSP(${sp.id})">Xoá</button>
  </th>
</tr>
  `)
  );
  document.getElementById("tblDanhSachSP").innerHTML = htmls;
}

function turnOnLoading() {
  document.getElementById("spinner").style.display = "block";
}

function turnOffLoading() {
  document.getElementById("spinner").style.display = "none";
}

function getDataForm() {
  var _name = document.getElementById("TenSP").value;
  var _price = Number(document.getElementById("GiaSP").value);
  var _img = document.getElementById("HinhSP").value;
  var _desc = document.getElementById("MoTaSP").value;
  return {
    name: _name,
    price: _price,
    img: _img,
    desc: _desc,
  };
}
