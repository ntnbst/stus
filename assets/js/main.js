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

  const allCloseModalButtons = document.querySelectorAll('.modal-close')
  const allModalBackgrounds = document.querySelectorAll('.modal-background')

  const allModalElements = document.querySelectorAll('.modal')

  if (allCloseModalButtons.length > 0) {
    allCloseModalButtons.forEach(el => {
      el.addEventListener('click', () => {
        allModalElements.forEach(modalEl => {
          modalEl.classList.remove('is-active')
        })
      })
    })
  }

  if (allModalBackgrounds.length > 0) {
    allModalBackgrounds.forEach(el => {
      el.addEventListener('click', () => {
        allModalElements.forEach(modalEl => {
          modalEl.classList.remove('is-active')
        })
      })
    })
  }

  const filterBtn = document.getElementById('filterBtn')
  const filterModal = document.getElementById('filterModal')

  const turnOnLocationBtn = document.getElementById('turnOnLocationBtn')

  signUpButton.addEventListener('click', () => {
    loginModal.classList.add('is-active')
  })
  
  loginButton[0].addEventListener('click', () => {
    console.log('cll')
    loginModal.classList.add('is-active')
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



  const timeSelectionDropdownFrom = document.getElementById('time-selection-from')
  const timeSelectionDropdownTo = document.getElementById('time-selection-to')
  const totalSelectedHours = document.getElementById('total-selected-hours')
  const ratesPerHourElement = document.getElementById('rate-per-hour')
  const totalCalculatedAmountElement = document.getElementById('total-calculated-amount')

  let ratesPerHour = '';
  if (ratesPerHourElement)  {
    ratesPerHour = ratesPerHourElement.dataset.pricePerHour
  }
  if (timeSelectionDropdownFrom && timeSelectionDropdownTo) { 
    timeSelectionDropdownFrom.addEventListener('change', () => {
      let fromValue = timeSelectionDropdownFrom.value
      let toValue = timeSelectionDropdownTo.value

      let [fromHH, fromMM] = fromValue.split(':')
      
      timeSelectionDropdownTo.value = `${parseInt(fromHH) + 3}:${fromMM}`
      let [toHH, toMM] = timeSelectionDropdownTo.value.split(':')

      let calculateTotalHours = `${parseInt(toHH) - parseInt(fromHH)} . ${parseInt(toMM) - parseInt(fromMM) == 30 ? '5' : '0'}`
      console.log('ratesPerHour', ratesPerHour)
      console.log('calculateTotalHours', (calculateTotalHours))

      totalSelectedHours.innerHTML = `${calculateTotalHours} hr`
      totalCalculatedAmountElement.innerHTML = '$' + ratesPerHour * parseFloat(calculateTotalHours)
    })

    timeSelectionDropdownTo.addEventListener('change', (e) => {
      let fromValue = timeSelectionDropdownFrom.value
      let toValue = timeSelectionDropdownTo.value

      let [fromHH, fromMM] = fromValue.split(':')
      let [toHH, toMM] = toValue.split(':')

   
      let calculateTotalHours = `${parseInt(toHH) - parseInt(fromHH)} . ${parseInt(toMM) - parseInt(fromMM) == 30 ? '50' : '0'}`
      
      if(parseInt(toHH) - parseInt(fromHH) >= 3) {  
        console.log('fromHH ', fromHH, 'fromMM', fromMM)
        console.log('toHH', toHH, 'toHH', toMM)
        
        totalSelectedHours.innerHTML = `${calculateTotalHours} hr`
        totalCalculatedAmountElement.innerHTML = '$ ' + ratesPerHour * parseFloat(calculateTotalHours)
      } else {
        alert('time diff.should be greater than or eauals to 3 hours')
      }
      
    })
  }


  // order page modals
  const extendSessionButton = document.querySelectorAll('.extend-session-btn')
  const extendSessionConfirmBtn = document.querySelectorAll('.extend-session-confirm-btn')

  if (extendSessionButton.length > 0) {
    extendSessionButton.forEach(el => {
      el.addEventListener('click', () => {
        document.getElementById(el.dataset.targetModal).classList.add('is-active')
      })
    })
  }
  
  if(extendSessionConfirmBtn.length > 0) {
    extendSessionConfirmBtn.forEach(el => {
      el.addEventListener('click', () => {
        console.log('el', el)
        document.getElementById(el.dataset.targetModal).classList.add('is-active')
      })
    })
  }

  const cancelSessionButton = document.querySelectorAll('.cancel-session-btn')

  if (cancelSessionButton.length > 0) {
    cancelSessionButton.forEach(el => {
      el.addEventListener('click', () => {
        document.getElementById(el.dataset.targetModal).classList.add('is-active')
      })
    })
  }

  // Lightbox for gallery
  var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
  };

  // execute above function
  initPhotoSwipeFromDOM('.my-gallery');


  // DOMContentLoaded ends here
});

function dismissModal() {
  document.querySelectorAll('.modal').forEach(el => {
    el.classList.remove('is-active')
  })
}

// Helper functions
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



