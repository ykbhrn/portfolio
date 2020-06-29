function init() {

  const cursor = document.getElementById('cursor')
  const projects = document.querySelector('.projects')

  function cursorMove(event) {

    const x = event.clientX
    const y = event. clientY
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
    
  }

  function cursorHover() {
    cursor.style.background = 'red'
  }

  function cursorHoverOut() {
    cursor.style.background = 'black'
  }

  document.addEventListener( 'mousemove', cursorMove)
  projects.addEventListener( 'mouseenter', cursorHover)
  projects.addEventListener( 'mouseleave', cursorHoverOut)
}

window.addEventListener('DOMContentLoaded', init)