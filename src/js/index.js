/**
 * 1. Import node creates a copy of <Node> or <DocumentFragment> from another document,
 *    to be inserted into current document later, use children to return HTML Collection
 *    we want to get hold of the item (<li>) on the 0 index
*/

var input  = document.querySelector('.jsInput')
var btnAdd = document.querySelector('.jsAdd')
var template = document.querySelector('#list-template')
var listTemplate = document.importNode(template.content, true).children[0] /* [1.] */

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
  var inputValue = document.querySelector('.jsInput').value
  var list = document.querySelector('.jsList')
  var btnRemove = listTemplate.querySelector('.jsRemove')
  console.log(listTemplate.querySelector('.todo-app__list--item'))
  listTemplate.querySelector('.text').textContent = inputValue
  /*var listItem = document.createElement('li') // We need to pass parameter, what kind of element we want to create
  var btnEl = document.createElement('button')
  var iconEl = document.createElement('i')*/
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

  var remove = function () {
    listItem.remove()
  }

  /*btnElem.textContent = 'Delete Me!'
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
  })*/

  //listItem.addEventListener('dragstart', dragFn.start)
  //listItem.addEventListener('dragend', dragFn.stop)

  list.appendChild(listTemplate)
  btnRemove.addEventListener('click', remove)
}

btnAdd.addEventListener('click', add)
input.addEventListener('keyup', keyFn)
