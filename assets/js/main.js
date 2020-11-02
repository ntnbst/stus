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

  const turnOnLocationBtn = document.getElementById('turnOnLocationBtn')

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

  if (turnOnLocationBtn) {
    turnOnLocationBtn.addEventListener('click', () => {
      filterModal.classList.add('is-active')
    })
  }

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

  const timePickEl = document.getElementById('time-pick')
  const showFullTime = document.getElementById('show-full-time')
  const hoursValueEl = document.getElementById('hours-value')

  // hour selection and calculation
  const hoursDropdown = document.getElementById('hours')
  const ratesPerHourElement = document.getElementById('rate-per-hour')
  const ratesPerHour = ratesPerHourElement.dataset.pricePerHour
  const totalCalculatedAmountElement = document.getElementById('total-calculated-amount')
 
  if (hoursDropdown ) {
    hoursDropdown.addEventListener('change', () => {
      if (timePickEl.value) {
        totalCalculatedAmountElement.innerHTML = `$${ratesPerHour * hoursDropdown.value}`
        showFullTime.innerHTML = 
        `From ${timePickEl.value}
        to ${addHours(timePickEl.value, hoursDropdown.value)}` 
        hoursValueEl.innerHTML = hoursDropdown.value
      } else {
        alert('select time first')
      }
    }
  )}

  // Time pick
  if (timePickEl) {
    timePickEl.addEventListener('change', () => {
      showFullTime.innerHTML = 
        `From ${timePickEl.value}
          to ${addHours(timePickEl.value, hoursDropdown.value)}`
    })
  }
    
});

// Add hours to any time you provide as a first arg
function addHours(currentTime, addHours) {
  const t = currentTime.split(":")
  let [hours, minutes] = t
  let resultOfAddedHours = parseInt(hours) + parseInt(addHours)

  if (resultOfAddedHours > 24) {
    resultOfAddedHours = resultOfAddedHours - 24
  }
  if (resultOfAddedHours == 24) resultOfAddedHours = '00'
  
  return `${resultOfAddedHours}:${minutes}`
}

// Input should be like - hh:mm or h:m or hh:m or h:mm
function twenty24HourTimeToAMPM(time) {

  const t = time.split(":")
  let [hour, minutes] = t 

  if (hour > 24 || minutes > 60) {
    throw new Error('Invalid time !!!')
  }

  console.log('hour', hour)

  if (hour >= 11 && hour != 12) {
    hour = hour - 12
    return `${hour}:${minutes} PM`
  } else if (hour == 12) {
    return `12:${minutes} PM`
  }
  
  else return `${hour}:${minutes} AM`
}

