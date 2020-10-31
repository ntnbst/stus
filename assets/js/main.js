document.addEventListener('DOMContentLoaded', () => {
  // Navbar hamburger functionality in mobile 
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const signUpButton = document.getElementById('signUpButton')
  const loginButton = document.querySelectorAll('.login-btn')
  const loginModal = document.getElementById('loginModal')
  const closeButton = document.getElementById('modalClose')
  const modalBackground = document.getElementById('modalBackground')

  const filterBtn = document.getElementById('filterBtn')
  const filterModal = document.getElementById('filterModal')
  const filterModalBackground = document.getElementById('filterModalBackground')
  const filterModalClose = document.getElementById('filterModalClose')

  signUpButton.addEventListener('click', () => {
    loginModal.classList.add('is-active')
  })
  
  loginButton[0].addEventListener('click', () => {
    console.log('cll')
    loginModal.classList.add('is-active')
  })

  closeButton.addEventListener('click', () => {
    loginModal.classList.remove('is-active')
  })
  
  modalBackground.addEventListener('click', () => {
    loginModal.classList.remove('is-active')
  })

  if (filterBtn) { 
    filterBtn.addEventListener('click', () => {
      filterModal.classList.add('is-active')
    })
  }

  if (filterModalClose && filterModalBackground) { 
    filterModalClose.addEventListener('click', () => {
      filterModal.classList.remove('is-active')
    })
    
    filterModalBackground.addEventListener('click', () => {
      filterModal.classList.remove('is-active')
    })
  }

  const signUpArtistBtn = document.querySelectorAll('.sign-up-artist-btn')
  const signUpStudioBtn = document.querySelectorAll('.sign-up-studio-btn')
  const signUpEngineerBtn = document.querySelectorAll('.sign-up-engineer-btn')

  const loginFlow = document.querySelectorAll('.login-flow')
  const signupFlowArtist = document.querySelectorAll('.sign-up-flow-artist')
  const signupFlowStudio = document.querySelectorAll('.sign-up-flow-studio')
  const signupFlowEngineer = document.querySelectorAll('.sign-up-flow-engineer')
  
  const waveTop = document.querySelectorAll('.wave-top')
  const roundSvgLeft = document.querySelectorAll('.round-svg-left')
  
  const signupSvgBottom = document.querySelectorAll('.sign-up-svg-bottom')
  const signupSvgRight = document.querySelectorAll('.sign-up-svg-right')


  signUpArtistBtn[0].addEventListener('click', () => {
    waveTop[0].style.display = 'none'
    roundSvgLeft[0].style.display = 'none'
    signupSvgRight[0].style.display = 'block'
    signupSvgBottom[0].style.display = 'block'

    loginFlow[0].style.display = 'none'
    signupFlowArtist[0].style.display = 'block'

  })
  signUpStudioBtn[0].addEventListener('click', () => {
    waveTop[0].style.display = 'none'
    roundSvgLeft[0].style.display = 'none'
    signupSvgRight[0].style.display = 'block'
    signupSvgBottom[0].style.display = 'block'

    loginFlow[0].style.display = 'none'
    signupFlowStudio[0].style.display = 'block'
  })
  signUpEngineerBtn[0].addEventListener('click', () => {
    waveTop[0].style.display = 'none'
    roundSvgLeft[0].style.display = 'none'
    signupSvgRight[0].style.display = 'block'
    signupSvgBottom[0].style.display = 'block'
    
    loginFlow[0].style.display = 'none'
    signupFlowEngineer[0].style.display = 'block'
  })

  // Date selection
  const datePickEl = document.getElementById('date-pick')
  const dateValue = document.getElementById('date-value')
  const monthValue = document.getElementById('month-text')
  const showFullDateValue = document.getElementById('show-full-date')

  if (datePickEl) {
    // Set default date to today
    const today = new Date()
    datePickEl.setAttribute("value", today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate())

    const selectedDateString = new Date(today).toDateString()
    const dateArray = selectedDateString.split(" ")
    const [day, month, date, year] = dateArray
    dateValue.innerHTML = date
    monthValue.innerHTML = month
    showFullDateValue.innerHTML = `${month} ${date}, ${year}`

    // Set date on changing the date via calender
    datePickEl.addEventListener('change', (e) => {
      const selectedDateString = new Date(datePickEl.value).toDateString()
      const dateArray = selectedDateString.split(" ")
      const [day, month, date, year] = dateArray
      dateValue.innerHTML = date
      monthValue.innerHTML = month
      showFullDateValue.innerHTML = `${month} ${date}, ${year}`
    })
  }

  // Time pick
  const timePickEl = document.getElementById('time-pick')
  const showFullTime = document.getElementById('show-full-time')
  
  if (timePickEl) {
    timePickEl.addEventListener('change', () => {
      showFullTime.innerHTML = timePickEl.value
    })
  }

    
});