const ls = localStorage
const container = document.querySelector('.main__container')
const template = document.getElementById('card-template')

renderCards()

function renderCards() {
  if (ls.history) {
    const history = JSON.parse(ls.history)

    for (let key in history) {
      const person = history[key]
      const card = template.content.cloneNode(true)
      const deleteBtn = card.querySelector('.delete-button')

      card.querySelector('.card').setAttribute('id', key)

      for (key in person) {
        card.getElementById(key).textContent = person[key]
      }

      deleteBtn.addEventListener('click', deleteCard)
      container.append(card)
    }
  }
}

function deleteCard(e) {
  const item = e.target.closest('.card')

  removeStorageItem(item.id)
  container.removeChild(item)
}

function removeStorageItem(id) {
  const history = JSON.parse(ls.history)

  delete history[id]

  ls.history = JSON.stringify(history)
}
