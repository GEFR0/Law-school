const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const overlay = document.querySelector('.overlay')


burger.addEventListener('click', function(){
   nav.classList.toggle('open');
   burger.classList.toggle('active');
   document.body.classList.toggle('menu-open');
})

document.querySelector('.overlay');
   overlay.addEventListener('click', function(){
      nav.classList.remove('open');
      burger.classList.remove('active');
      document.body.classList.remove('menu-open');
   })

document.querySelectorAll('.nav__links a').forEach(function(link) {
   link.addEventListener('click', function(){
      nav.classList.remove('open');
      burger.classList.remove('active');
      document.body.classList.remove('menu-open');
   })
})

const observer = new IntersectionObserver(function(entries) {
   entries.forEach(function(entry){
      if(entry.isIntersecting) {
         entry.target.classList.add('visible')
      }
   })
})
/*window.addEventListener('scroll',function() {
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   }
   else {
      navbar.classList.remove('scrolled');
   }
})*/
document.querySelectorAll('.services__card').forEach(function(item){
   observer.observe(item);
}) 