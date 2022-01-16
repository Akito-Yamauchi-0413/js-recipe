const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

//button.onclickには関数を代入しなければならないが、alerMessage()は関数ではないから

const plusButton = document.getElementById("plus-button")

plusButton.onclick = function () {
  console.log("こんにちは")
}
