// shared across all FronaVie prototype pages
document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('header');
  if(header){
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if(menuToggle && mobileMenu){
    menuToggle.addEventListener('click', function(){ mobileMenu.classList.toggle('open'); });
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mobileMenu.classList.remove('open'); });
    });
  }

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
});
