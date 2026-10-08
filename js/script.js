const menuToggle=document.querySelector('.menu-toggle');const menu=document.querySelector('.menu');menuToggle?.addEventListener('click',()=>menu.classList.toggle('open'));document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let dots=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight}function init(){dots=Array.from({length:70},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.6+.3,v:Math.random()*.22+.05}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#c5a3ff';for(const d of dots){d.y-=d.v;if(d.y<0)d.y=canvas.height;ctx.globalAlpha=.18;ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}addEventListener('resize',()=>{resize();init()});resize();init();draw();


const partnerForm = document.getElementById('partnerForm');
if (partnerForm) {
  partnerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(partnerForm);
    const message = [
      'Olá! Quero me candidatar ao programa de parceria Streetfighter.',
      '',
      `Nome: ${data.get('nome')}`,
      `Instagram / rede social: ${data.get('instagram') || 'Não informado'}`,
      `Cidade / Estado: ${data.get('localizacao')}`,
      `Tipo de parceria: ${data.get('tipo')}`,
      `Sobre mim: ${data.get('mensagem') || 'Não informado'}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/5531991049112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}