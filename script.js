const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const escapeHtml=(value='')=>String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
async function loadProjects(){
  const gallery=document.getElementById('project-gallery');
  if(!gallery)return;
  try{
    const response=await fetch('/content/projects.json',{cache:'no-store'});
    if(!response.ok)throw new Error('Could not load project gallery');
    const data=await response.json();
    const projects=Array.isArray(data.projects)?data.projects:[];
    gallery.innerHTML=projects.map(project=>`<figure class="gallery-project"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt||project.title||'Custom Drywall and Paint project')}" loading="lazy"><figcaption><h3>${escapeHtml(project.title||'Project')}</h3><p>${escapeHtml(project.description||'')}</p></figcaption></figure>`).join('');
  }catch(error){
    gallery.innerHTML='<p>Project photos are being updated. Please check back soon.</p>';
  }
}
loadProjects();
