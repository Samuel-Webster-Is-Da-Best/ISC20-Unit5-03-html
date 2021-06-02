document.getElementById('button').addEventListener('click', msg)

function msg () {
  const val = document.getElementById('textbox').value
  alert(val)
  document.getElementById('textbox').value = ''
}
