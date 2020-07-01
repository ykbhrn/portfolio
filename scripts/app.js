function init() {

  const cursor = document.getElementById('cursor')
  const projects = document.getElementById('project-section')
  const projectDetailView = document.querySelector('.projects-detail-view')
  const slider = document.querySelector('.projects')
  const about = document.getElementById('about')
  const experience = document.getElementById('experience')
  const sectionOne = document.getElementById('home')
  const header = document.querySelector('.menu')
  const projectIconOne = document.querySelector('.project-icon-one')
  const projectIconAll = document.querySelector('.project-icon-two')
  const projectFirst = document.querySelector('.project-first')
  const projectSecond = document.querySelector('.project-second')
  const next = document.querySelector('.next')
  const previous = document.querySelector('.previous')

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


  function activeNavbar(event){ 
    const selected = document.querySelector('.selected-nav')
    if (selected !== null) {
      selected.classList.remove('selected-nav')
    }
    event.target.className = 'selected-nav'
  }

  function showAll(){
    slider.style.display = 'none'
    projectDetailView.style.display = 'flex'
  }

  function showOne(){
    projectDetailView.style.display = 'none'
    slider.style.display = 'block'
  }

  function showFirst() {
    projectFirst.style.display = 'flex'
    projectSecond.style.display = 'none'
  }

  function showSecond() {
    projectSecond.style.display = 'flex'
    projectFirst.style.display = 'none'
  }


  document.addEventListener( 'mousemove', cursorMove)
  header.addEventListener('click', activeNavbar)
  projects.addEventListener('mouseenter', scroll)
  projects.addEventListener('mouseleave', scrollOut)
  about.addEventListener('mouseenter', scrollAbout)
  about.addEventListener('mouseleave', scrollOutAbout)
  // experience.addEventListener('mouseenter', scrollExperience)
  // experience.addEventListener('mouseleave', scrollOutExperience)
  projectIconOne.addEventListener('click', showOne)
  projectIconAll.addEventListener('click', showAll)
  previous.addEventListener('click', showFirst)
  next.addEventListener('click', showSecond)
}

window.addEventListener('DOMContentLoaded', init)