document.getElementById('button').addEventListener('click', msg)

function msg() {
  var val = document.getElementById('textBox').value
  alert(val)
  document.getElementById('textBox').value = ''
}