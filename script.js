const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});reveals.forEach(el=>io.observe(el));
const heroImg=document.querySelector('.hero-media img');
const story=document.querySelector('.story');const scenes=[...document.querySelectorAll('.product-scene')];
function tick(){const y=scrollY;if(heroImg&&!reduce){heroImg.style.transform=`scale(${1.08+Math.min(y/5000,.08)}) translateY(${Math.min(y*.05,28)}px)`}if(story){const r=story.getBoundingClientRect();const total=story.offsetHeight-innerHeight;const progress=Math.max(0,Math.min(1,-r.top/total));const idx=Math.min(scenes.length-1,Math.floor(progress*scenes.length));scenes.forEach((s,i)=>s.classList.toggle('active',i===idx))}}
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick();
