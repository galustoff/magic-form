const ls = localStorage
const container = document.querySelector('.main__container')
const template = document.getElementById('card-template')

if (ls.history) {
  const history = JSON.parse(ls.history)

  for (let key in history) {
    const person = history[key]
    const card = template.content.cloneNode(true)

    for (key in person) {
      card.getElementById(key).textContent = person[key]
    }

    container.append(card)
  }
}
