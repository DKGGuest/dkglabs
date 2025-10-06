// Configuration - Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxXztyfpXWQr8y320-9S_3lwA0ToEsAyzrgFr2wrtt0k8xlY-NfPaVS5cqUZ7Egdg/exec';

document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('leadForm');
const note=document.getElementById('formNote');
const year=document.getElementById('year');
if(year){year.textContent=String(new Date().getFullYear())}
window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'page_view'});

// removed equal-height/font-resize logic per user request

// bottom bar removed; no scroll handler needed

function setError(id,msg){const el=document.querySelector(`[data-error-for="${id}"]`);if(el){el.textContent=msg||''}}
function validateEmail(v){
  // More comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(v.trim());
}

// bottom bar smooth scroll to company section (whole bar clickable)
const knowMoreBar=document.getElementById('knowMoreBar');

function animateScrollTo(targetY,duration){
  const startY=window.pageYOffset;
  const delta=targetY - startY;
  const start=performance.now();
  const easeInOut=(t)=>t<.5?2*t*t:(-1+(4-2*t)*t);
  function frame(now){
    const elapsed=now-start;
    const t=Math.min(1, elapsed/(duration||700));
    const eased=easeInOut(t);
    window.scrollTo(0, startY + delta*eased);
    if(t<1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
knowMoreBar?.addEventListener('click',()=>{
const section=document.querySelector('#company');
if(section){
  const rect=section.getBoundingClientRect();
  const desired=Math.max(0, rect.top + window.pageYOffset + 240);
  animateScrollTo(desired, 950);
}
knowMoreBar.classList.add('hidden');
});

// show bar only when scrolled to top
window.addEventListener('scroll',()=>{
if(!knowMoreBar) return;
if(window.scrollY<=8){
  knowMoreBar.classList.remove('hidden');
}else{
  // hide when user scrolls down from top
  knowMoreBar.classList.add('hidden');
}
});

// CTA back to top
document.getElementById('backToForm')?.addEventListener('click',(e)=>{
e.preventDefault();
animateScrollTo(0,700);
});

// Clicking the logo scrolls to top
document.querySelector('.brand .logo')?.addEventListener('click',()=>{
animateScrollTo(0,700);
});

// fade-in on scroll for cards
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('reveal');}
  })
},{threshold:0.12});
document.querySelectorAll('.card').forEach(el=>{
  el.classList.add('will-reveal');
  observer.observe(el);
});

// Reset note styling when user starts typing again
form?.addEventListener('input', () => {
  if (note.textContent) {
    note.style.color = ''; // Reset to default color
  }
});

form?.addEventListener('submit',async(e)=>{
e.preventDefault();
note.textContent='';
note.style.color = ''; // Reset color
let valid=true;

const fullName=document.getElementById('fullName');
const email=document.getElementById('email');
const company=document.getElementById('company');
const industry=document.getElementById('industry');

setError('fullName','');setError('email','');setError('company','');setError('industry','');

// Name: alphabets and spaces only
if(!/^([A-Za-z]+(?:\s+[A-Za-z]+)*)$/.test(fullName.value.trim())){setError('fullName','Use letters and spaces only');valid=false}
// Email validation: format check only
const emailValue = email.value.trim();
if(!validateEmail(emailValue)){
  setError('email','Please enter a valid email address');
  valid=false;
}
// Company: alphanumeric and spaces, max 4 digits total, not numeric-only
const companyVal=company.value.trim();
const digits=(companyVal.match(/\d/g)||[]).length;
if(!/^[A-Za-z0-9 ]+$/.test(companyVal) || digits>4 || /^\d+$/.test(companyVal)){
  setError('company','Letters/numbers, max 4 digits, not numbers only');
  valid=false;
}
if(!industry.value){setError('industry','Please select your industry');valid=false}

if(!valid){note.textContent='Please fix the errors above.';return}

const payload={
fullName:fullName.value.trim(),
email:email.value.trim(),
company:company.value.trim(),
industry:industry.value
};

const submitBtn=form.querySelector('button[type="submit"]');
submitBtn.disabled=true;submitBtn.textContent='Submitting...';

try{
// Check if Google Apps Script URL is configured
if (GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
  throw new Error('Google Apps Script URL not configured');
}

// Send data to Google Sheets via Google Apps Script (no-cors mode)
await fetch(GOOGLE_APPS_SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload)
});

// With no-cors mode, we can't read the response, so we assume success
console.log('Lead submission sent:', payload);
window.dataLayer.push({event:'lead_submit', payload});
note.textContent='✅ Thank you! Your response has been recorded.';
note.style.color = '#28a745'; // Green color for success
form.reset();

}catch(err){
console.error('Submission error:', err);
note.style.color = '#dc3545'; // Red color for error

// Provide specific error messages based on error type
if (err.message.includes('Google Apps Script URL not configured')) {
  note.textContent='Configuration error. Please contact the administrator.';
} else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
  note.textContent='Network error. Please check your connection and try again.';
} else {
  note.textContent='❌ Something went wrong. Please try again.';
}
}finally{
submitBtn.disabled=false;submitBtn.textContent='Request demo';
}
});
});

