var input  = document.querySelector('.jsInput')
var btnAdd = document.querySelector('.jsAdd')

var keyFn = function (ev) {
    if (ev.preventDefault()) return false

    var key = ev.key || ev.keyCode

    if(input.value !== '') { // Check state, if value is not empty string
      btnAdd.removeAttribute('disabled')

      if (key === 'Enter' || key === 13) {
        add()
      }

    } else {

      btnAdd.setAttribute('disabled', '')
    }
}

var add = function () {
  var list = document.querySelector('.jsList')
  var inputValue = document.querySelector('.jsInput').value
  var listItem = document.createElement('li') // We need to pass parameter, what kind of element we want to create
  var btnEl = document.createElement('button')
  var iconEl = document.createElement('i')
  var dragFn = {
    'start': function () {
      console.log('Drag Start')
    },
    'enter': function () {
      console.log('Drag Enter')
    },
    'leave': function () {
      console.log('Drag Leave')
    },
    'stop': function () {
      console.log('Drag End')
    }
  }

  //btnElem.textContent = 'Delete Me!'
  btnEl.classList.add('btn-delete')
  btnEl.classList.add('jsRemove')
  btnEl.setAttribute('title', 'Delete')

  iconEl.classList.add('ion')
  iconEl.classList.add('ion-ios-close')

  listItem.textContent = inputValue // Insert text
  listItem.classList.add('todo-app__list--item')
  listItem.setAttribute('draggable', 'true')

  list.appendChild(listItem) // Specify where do I want to append (inject) new element to, in "()" specify what child I want to inject
  listItem.appendChild(btnEl)
  btnEl.appendChild(iconEl)

  btnEl.addEventListener('click', function () {
    listItem.parentNode.removeChild(listItem)
  })

  listItem.addEventListener('dragstart', dragFn.start)
  listItem.addEventListener('dragend', dragFn.stop)
}

btnAdd.addEventListener('click', add)
input.addEventListener('keyup', keyFn)
