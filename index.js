const ls = localStorage
const form = document.getElementById('form')
const inputs = Array.from(document.querySelectorAll('.form__input'))

form.addEventListener('submit', makeRecord)

function makeRecord(e) {
  e.preventDefault()

  let record = {}

  inputs.forEach((i) => {
    record[i.name] = i.value
  })

  ls.setItem(`record${ls.length + 1}`, JSON.stringify(record))

  form.reset()
}
