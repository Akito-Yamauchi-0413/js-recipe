const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)
  const card = document.createElement("div")
  const dcard = document.createElement("button")
  card.className = "memo-container"
  card.textContent = memoInput.value
  dcard.textContent = "削除"
  cardsContainer.append(card)

  card.append(dcard)

  dcard.onclick = function () {
    card.remove()
  }
  memoInput.value = null
}
