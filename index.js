var input  = document.querySelector('.jsInput')

var keyFn = function (ev) {
    if (ev.preventDefault()) return false

    var key = ev.key || ev.keyCode

    if(input.value !== '') { // Check state, if value is not empty string

      if (key === 'Enter' || key === 13) { // 13 Enter Key code
        add()
      }

    } else {

      alert('You have empty input!')
    }
}

var btnAdd = document.querySelector('.jsAdd')
var btnRemove = document.querySelector('.jsRemove')

var add = function () {
    var newElem = document.createElement('li') // We need to pass parameter, what kind of element we want to create
    var list = document.querySelector('.jsList')
    var inputValue = document.querySelector('.jsInput').value
    var btnElem = document.createElement('button')

    btnElem.textContent = 'Delete Me!'
    btnElem.classList.add('btn')
    btnElem.classList.add('jsRemove')
    newElem.textContent = inputValue // Insert text
    newElem.classList.add('elem')

    list.appendChild(newElem) // Specify where do I want to append (inject) new element to, in "()" specify what child I want to inject
    newElem.appendChild(btnElem)

    btnElem.addEventListener('click', function () {
      newElem.parentNode.removeChild(newElem)
    })
}

btnAdd.addEventListener('click', add)
input.addEventListener('keyup', keyFn)
