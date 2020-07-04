function init() {

  const cursor = document.getElementById('cursor')
  const projects = document.getElementById('project-section')
  const projectDetailView = document.querySelector('.projects-detail-view')
  const slider = document.querySelector('.projects')
  const about = document.getElementById('about')
  const experience = document.getElementById('experience')
  const home = document.getElementById('home')
  const header = document.querySelector('.menu')
  const projectIconOne = document.querySelector('.project-icon-one')
  const projectIconAll = document.querySelector('.project-icon-two')
  const projectFirst = document.querySelector('.project-first')
  const projectSecond = document.querySelector('.project-second')
  const next = document.querySelector('.next')
  const previous = document.querySelector('.previous')
  const nextAbout = document.querySelector('.next-about')
  const previousAbout = document.querySelector('.previous-about')
  const aboutText = document.querySelector('.about-container')
  const aboutWho = document.querySelector('.about-who-container')
  const aboutHeader = document.querySelector('.about-header')


  function scroll() {
    if ( $(document).width() > 1100 ){
      const selected = document.querySelector('.selected-nav')
      if (selected !== null) {
        selected.classList.remove('selected-nav')
      }
      header.children[2].classList.add('selected-nav')
    }
  }

  function scrollOut() {
    if ( $(document).width() > 1100 ){
      header.children[2].classList.remove('selected-nav')
    }
  }

  function scrollAbout() {
    if ( $(document).width() > 1100 ){
      const selected = document.querySelector('.selected-nav')
      if (selected !== null) {
        selected.classList.remove('selected-nav')
      }
      header.children[1].classList.add('selected-nav')
    }
  }
  function scrollOutAbout() {
    if ( $(document).width() > 1100 ){
      header.children[1].classList.remove('selected-nav')
    }
  }

  function scrollExperience() {
    if ( $(document).width() > 1100 ){
      const selected = document.querySelector('.selected-nav')
      if (selected !== null) {
        selected.classList.remove('selected-nav')
      }
      header.children[3].classList.add('selected-nav')
    }
  }
  function scrollOutExperience() {
    if ( $(document).width() > 1100 ){
      header.children[3].classList.remove('selected-nav')
    }
  }

  function scrollHome() {
    if ( $(document).width() > 1100 ){
      const selected = document.querySelector('.selected-nav')
      if (selected !== null) {
        selected.classList.remove('selected-nav')
      }
      header.children[0].classList.add('selected-nav')
    }
  }
  function scrollOutHome() {
    if ( $(document).width() > 1100 ){
      header.children[0].classList.remove('selected-nav')
    }
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

  sectionOneObserver.observe(home)



  function cursorMove(event) {
    
    if ( $(document).width() > 1100 ){
      const x = event.clientX
      const y = event. clientY
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
    }
    
  }


  function activeNavbar(event){ 
    if ( $(document).width() > 1100 ){
      const selected = document.querySelector('.selected-nav')
      if (selected !== null) {
        selected.classList.remove('selected-nav')
      }
      event.target.className = 'selected-nav'
    }
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

  function showText() {
    aboutText.style.display = 'flex'
    aboutWho.style.display = 'none'
    aboutHeader.textContent = 'How the Love began?'
  }

  function showWho() {
    aboutWho.style.display = 'flex'
    aboutText.style.display = 'none'
    aboutHeader.textContent = 'Who am I in the Pictures'
  }

  $('.submit').click(function() {
    console.log('click')
    
    const email = $('.email').val()
    const subject = $('.subject').val()
    const message = $('.message').val()
    const statusElm = $('.status')
    statusElm.empty()

    if (email.length < 5 || !email.includes('@') || !email.includes('.')) {
      event.preventDefault()
      statusElm.append('<div>Type valid email adress</div>')   
    } 
    if (message.length < 2)  {
      event.preventDefault()
      statusElm.append('<div>You can\'t send empty email</div>')
    }
  })

  document.addEventListener( 'mousemove', cursorMove)
  header.addEventListener('click', activeNavbar)
  projects.addEventListener('mouseenter', scroll)
  projects.addEventListener('mouseleave', scrollOut)
  home.addEventListener('mouseenter', scrollHome)
  home.addEventListener('mouseleave', scrollOutHome)
  about.addEventListener('mouseenter', scrollAbout)
  about.addEventListener('mouseleave', scrollOutAbout)
  experience.addEventListener('mouseenter', scrollExperience)
  experience.addEventListener('mouseleave', scrollOutExperience)
  projectIconOne.addEventListener('click', showOne)
  projectIconAll.addEventListener('click', showAll)
  previous.addEventListener('click', showFirst)
  next.addEventListener('click', showSecond)
  previousAbout.addEventListener('click', showText)
  nextAbout.addEventListener('click', showWho)
}

window.addEventListener('DOMContentLoaded', init)