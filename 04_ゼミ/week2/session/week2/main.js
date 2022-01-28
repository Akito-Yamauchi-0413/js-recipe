const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)
  const card = document.createElement("div")
  card.className = "memo-container"
  card.textContent = memoInput.value
  cardsContainer.append(card)
  memoInput.value = null
}
