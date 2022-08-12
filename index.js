const ls = localStorage
const form = document.getElementById('form')
const inputs = Array.from(document.querySelectorAll('.form__input'))

inputs.forEach((i) => {
  value = ls.getItem(i.name)

  if (value) {
    i.value = value
  }
})

form.addEventListener('input', (e) => {
  ls.setItem(e.target.name, e.target.value)
})
