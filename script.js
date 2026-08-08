/* ==========================================
   MASTER REFRIGERAÇÃO
   SCRIPT.JS
========================================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Navbar Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Contadores
const counters = document.querySelectorAll("[data-number]");

let started = false;

window.addEventListener("scroll", () => {

    const numbers = document.querySelector(".numbers");

    if(!numbers) return;

    if(window.scrollY > numbers.offsetTop - 500 && !started){

        started = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.number);

            let current = 0;

            const increment = target / 100;

            const update = () => {

                current += increment;

                if(current < target){

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            }

            update();

        });

    }

});

// Scroll Reveal
const revealElements = document.querySelectorAll(

".section-title,.service-card,.benefit,.testimonial,.number-card,.about-image,.about-text,.compare-card,.cta-content,.contact-form,.info-card"

);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

            el.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

// Smooth Scroll Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Menu Mobile
const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

if(menuButton){

menuButton.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}

// Fecha menu ao clicar
document.querySelectorAll(".menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

// Botão WhatsApp animação
const whatsapp = document.querySelector(".whatsapp");

setInterval(()=>{

if(whatsapp){

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.12)"},

{transform:"scale(1)"}

],{

duration:1500

});

}

},4000);

// Hover 3D Cards
document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// Botão Voltar ao Topo
const topButton=document.createElement("div");

topButton.className="back-top";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
