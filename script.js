document.getElementById('yr').textContent=new Date().getFullYear();
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.card').forEach(function(c){
 c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateX('+(-y*10)+'deg) rotateY('+(x*10)+'deg) translateY(-4px)'});
 c.addEventListener('mouseleave',function(){c.style.transform=''})})}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.style.width=e.target.dataset.w;io.unobserve(e.target)}})},{threshold:.4});
document.querySelectorAll('.bar i').forEach(function(b){io.observe(b)});