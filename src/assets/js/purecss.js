function toggleClass (element, className) {
  var classes = element.className.split(/\s+/)
  var length = classes.length
  var i
  for (i = 0; i < length; i++) {
    if (classes[i] === className) {
      classes.splice(i, 1)
      break
    }
  }
  // The className is not found
  if (length === classes.length) {
    classes.push(className)
  }

  element.className = classes.join(' ')
}

var menuLink = document.getElementById('menuLink')
menuLink.onclick = function (e) {
  var layout = document.getElementById('layout')
  var menu = document.getElementById('menu')
  var menuLink = document.getElementById('menuLink')

  var active = 'active'
  console.log('xxx')

  e.preventDefault()
  toggleClass(layout, active)
  toggleClass(menu, active)
  toggleClass(menuLink, active)
}
