const ls = localStorage
const container = document.querySelector('.main__container')
const template = document.getElementById('card-template')

for (let i = 1; i <= ls.length; i++) {
  const card = template.content.cloneNode(true)
  const record = JSON.parse(ls.getItem(`record${i}`))

  for (let key in record) {
    card.getElementById(key).textContent = record[key]
  }

  container.append(card)
}
