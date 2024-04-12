const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove(show-menu)
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function scrollHeader() {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}



document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("typing-text");
  const text = textElement.textContent;

  
  textElement.textContent = '';

  let index = 0;

  function type() {
      if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
      } else {
          index = 0; 
          textElement.textContent = ''; 
      }
      setTimeout(type, 200);
  }

  type(); 
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to animate the website entrance
    function animateWebsiteEntrance() {
      const sections = document.querySelectorAll('.section');
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-section');
        }
      });
  
      const skillIcons = document.querySelectorAll('.skill-icon');
  
      skillIcons.forEach(icon => {
        const iconTop = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (iconTop < windowHeight * 0.75) {
          icon.classList.add('animate-icon');
        }
      });
  
      const homeContent = document.querySelector('.home-content');
  
      if (homeContent) {
        const homeContentTop = homeContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (homeContentTop < windowHeight * 0.75) {
          homeContent.classList.add('animate-home-content');
        }
      }
    }
  
    
    animateWebsiteEntrance();
    window.addEventListener('scroll', animateWebsiteEntrance);
  });
  


  /* DARK LIGHT THEME */

  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

  }

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


