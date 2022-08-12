const ls = localStorage
const form = document.getElementById('form')
const inputs = Array.from(document.querySelectorAll('.form__input'))

restoreData()

form.addEventListener('input', storeData)
form.addEventListener('submit', makeRecord)

function restoreData() {
  inputs.forEach((i) => {
    i.value = ls[i.name] || ""
  })
}

function storeData(e) {
  ls[e.target.name] = e.target.value
}

function makeRecord(e) {
  e.preventDefault()

  let history = ls.history ? JSON.parse(ls.history) : {}
  let key = `person${Object.keys(history).length + 1}`

  history[key] = {}

  inputs.forEach((i) => {
    history[key][i.name] = i.value
  })

  ls.history = JSON.stringify(history)

  form.reset()
  resetStoredData()
}

function resetStoredData() {
  inputs.forEach((i) => {
    ls[i.name] = ''
  })
}
