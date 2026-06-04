const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const content = document.querySelector('.content')
const bottom = document.querySelector('.bottom')

burger.addEventListener('click', function(){
   nav.classList.toggle('open');
   burger.classList.toggle('active');
   content.classList.toggle('background_blur')
   bottom.classList.toggle('background_blur')
})

document.querySelectorAll('.nav__links a').forEach(function(link) {
   link.addEventListener('click', function(){
      nav.classList.remove('open');
      burger.classList.remove('active');
      content.classList.remove('background_blur');
      bottom.classList.remove('background_blur');
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