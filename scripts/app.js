function init() {

  const cursor = document.getElementById('cursor')
  const projects = document.getElementById('project-section')
  const about = document.getElementById('about')
  const experience = document.getElementById('experience')
  const sectionOne = document.getElementById('home')
  const header = document.querySelector('.menu')

  function scroll() {
    const selected = document.querySelector('.selected-nav')
    if (selected !== null) {
      selected.classList.remove('selected-nav')
    }
    header.children[1].classList.add('selected-nav')
  }
  function scrollOut() {
    header.children[1].classList.remove('selected-nav')
  }

  function scrollAbout() {
    const selected = document.querySelector('.selected-nav')
    if (selected !== null) {
      selected.classList.remove('selected-nav')
    }
    header.children[0].classList.add('selected-nav')
  }
  function scrollOutAbout() {
    header.children[0].classList.remove('selected-nav')
  }

  function scrollExperience() {
    const selected = document.querySelector('.selected-nav')
    if (selected !== null) {
      selected.classList.remove('selected-nav')
    }
    header.children[2].classList.add('selected-nav')
  }
  function scrollOutExperience() {
    header.children[2].classList.remove('selected-nav')
  }
  
    
  const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px'
  }

  const sectionOneObserver = new IntersectionObserver( function(entries, sectionOneObserver) {
    entries.forEach( entry => {
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled')
      } else {
        header.classList.remove('nav-scrolled')
      }
    })
  }, 
  sectionOneOptions)

  sectionOneObserver.observe(sectionOne)



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

  function activeNavbar(event){
    const selected = document.querySelector('.selected-nav')
    if (selected !== null) {
      selected.classList.remove('selected-nav')
    }
    event.target.className = 'selected-nav'
  }

  document.addEventListener( 'mousemove', cursorMove)
  projects.addEventListener( 'mouseenter', cursorHover)
  projects.addEventListener( 'mouseleave', cursorHoverOut)
  header.addEventListener('click', activeNavbar)
  projects.addEventListener('mouseenter', scroll)
  projects.addEventListener('mouseleave', scrollOut)
  about.addEventListener('mouseenter', scrollAbout)
  about.addEventListener('mouseleave', scrollOutAbout)
  experience.addEventListener('mouseenter', scrollExperience)
  experience.addEventListener('mouseleave', scrollOutExperience)
}

window.addEventListener('DOMContentLoaded', init)