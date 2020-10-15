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

  // Collapsible button functionality
  let coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    // simple one - to use this one remove max-height 0 from the style - .coll-hidden-content class
    // and enable display: none

    // coll[i].addEventListener("click", function() {
    //   this.classList.toggle("active");
    //   var content = this.previousElementSibling;
    //   if (content.style.display === "block") {
    //     this.innerHTML = 'more'
    //     content.style.display = "none";
    //   } else {
    //     this.innerHTML = 'less'
    //     content.style.display = "block";
    //   }
    // });


    // Animated one
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.previousElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        this.innerHTML = 'more'
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.innerHTML = 'less'
      } 
    })
    
  }
  
});