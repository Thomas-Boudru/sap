    
    const containersDid = document.querySelectorAll('.containers_did')
    for(let i = 0 ; i < containersDid.length ; i++){
      let isExpanded = false
      containersDid[i].addEventListener('click', function() {  
      if(isExpanded) {
        this.style.height= '100px'
        this.style.transition = '1s'
        isExpanded = false;
        } else {
          this.style.height= 'auto';
          this.style.transition = '1s'
          isExpanded = true;
        }
    })
  }

    /* reveal element while scroling */
    
    function reveal() {
      let reveals = document.querySelectorAll(".reveal")
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }

    window.addEventListener("scroll", reveal);

    reveal();

    //  Charts languages

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['french', 'dutch', 'english', 'spanish'],
      datasets: [{
        axis:'y',
        data: [5, 4, 4, 2],
        backgroundColor: [
          'rgb(249, 81, 238)',
          'rgb(249, 81, 238)',
          'rgb(249, 81, 238)',
          'rgb(249, 81, 238)'
        ]
      }]
    },
    options: {
      defaultFontFamily: 'Verdana',
      defaultFontSize: 20,
      indexAxis: 'y',
      scales: {
        x : { display: false, fontSize: 25,},
        y : {ticks: { fontSize: 25, color: 'white', beginAtZero: true }, fontSize : 20}
      },
      plugins : {
        legend: {
          display: false},
        tooltip: {
            enabled: false,
          },
      }
   }
});

if (window.matchMedia("(min-width: 57em)").matches) {
  Chart.defaults.font.size = 18
} else {
  Chart.defaults.font.size = 12
} 


  // texte autour linkedin //

  const text = document.querySelector('.text');
  text.innerHTML = text.textContent.replace(/\S/g, '<span class="spancircle">$&</span>');
  
  const element = document.querySelectorAll('.spancircle');
  for(let i = 0; i < element.length; i++){
      element[i].style.transform = "rotate("+i*15+"deg)";
  }
  


  // menu

 const hamburger = document.querySelector('.hamburger')
 const navMenu = document.querySelector('.nav-menu')

 hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
 })

 const navItems = document.querySelectorAll('.nav-link')
 for(let i = 0 ; i < navItems.length; i++){
  navItems[i].addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  })
 }
 