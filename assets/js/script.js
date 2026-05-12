$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        
        $('section[id]').each(function () {
            let height = $(this).height();
            let headerHeight = $('header').outerHeight() || 0;
            let offset = $(this).offset().top - headerHeight - 24;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    function scrollToSection(hash) {
        const target = $(hash);
        if (!target.length) return false;
        const headerHeight = $('header').outerHeight() || 0;
        const top = Math.max(target.offset().top - headerHeight - 16, 0);
        $('html, body').animate({ scrollTop: top }, 500, 'linear');
        return true;
    }

    
    $('a[href*="#"]').on('click', function (e) {
        const rawHref = $(this).attr('href');
        if (!rawHref || rawHref === '#') return;

        const link = new URL(rawHref, window.location.href);
        const isSamePage = link.pathname === window.location.pathname && link.hash;

        if (isSamePage && scrollToSection(link.hash)) {
            e.preventDefault();
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
            history.pushState(null, '', link.hash);
        }
    });

    if (window.location.hash) {
        setTimeout(function () {
            scrollToSection(window.location.hash);
        }, 80);
    }

    
    $("#contact-form").submit(function (event) {
        emailjs.init("S6VyGjn1GPJTLV8Ny");

        emailjs.sendForm('service_u5k199l', 'template_vealq6l', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Nitheesh M B";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });



var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});







VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});




document.querySelectorAll('.skills-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        
        document.querySelectorAll('.skills-tab').forEach(function(t) {
            t.classList.remove('active');
        });
        this.classList.add('active');

        var target = this.getAttribute('data-tab');
        var techPanel = document.getElementById('skills-tech');
        var toolsPanel = document.getElementById('skills-tools');

        if (target === 'tech') {
            toolsPanel.classList.add('skills-hidden');
            techPanel.classList.remove('skills-hidden');
            
            techPanel.querySelectorAll('.skill-icon-card').forEach(function(card) {
                card.style.animation = 'none';
                card.offsetHeight; 
                card.style.animation = '';
            });
        } else {
            techPanel.classList.add('skills-hidden');
            toolsPanel.classList.remove('skills-hidden');
            
            toolsPanel.querySelectorAll('.skill-icon-card').forEach(function(card) {
                card.style.animation = 'none';
                card.offsetHeight; 
                card.style.animation = '';
            });
        }
    });
});














document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}


const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });


srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });



srtop.reveal('.skills-left', { delay: 200 });
srtop.reveal('.skills-right .skill-icon-card', { interval: 100 });


srtop.reveal('.education .box', { interval: 200 });


srtop.reveal('.project-card', { interval: 200 });


srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });
srtop.reveal('.work-process .process-heading', { delay: 200 });
srtop.reveal('.work-process .process-card', { interval: 160 });


srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });



(function () {
  function initSkillCardEffects() {
    document.querySelectorAll('.skill-icon-card').forEach(card => {
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const rotX = -dy * 14;
        const rotY = dx * 14;
        card.style.transform = `scale(1.18) translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        card.style.perspective = '600px';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.perspective = '';
      });

      
      card.addEventListener('click', () => {
        createBurst(card);
      });
    });
  }

  function createBurst(card) {
    const colors = ['#f68c09', '#3b82f6', '#fff', '#f0a500'];
    for (let i = 0; i < 10; i++) {
      const dot = document.createElement('span');
      dot.style.cssText = `
        position: fixed;
        width: 8px; height: 8px;
        border-radius: 50%;
        background: ${colors[i % colors.length]};
        pointer-events: none;
        z-index: 9999;
        transition: none;
      `;
      document.body.appendChild(dot);

      const rect = card.getBoundingClientRect();
      const sx = rect.left + rect.width / 2;
      const sy = rect.top + rect.height / 2;
      dot.style.left = sx + 'px';
      dot.style.top = sy + 'px';

      const angle = (i / 10) * Math.PI * 2;
      const dist = 60 + Math.random() * 50;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      dot.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 }
      ], { duration: 600, easing: 'cubic-bezier(0,.9,.57,1)', fill: 'forwards' })
        .onfinish = () => dot.remove();
    }
  }

  
  document.querySelectorAll('.skills-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      setTimeout(() => {
        document.querySelectorAll('.skill-icon-card').forEach((card, i) => {
          card.style.animation = 'none';
          card.style.opacity = '0';
          void card.offsetWidth; 
          card.style.animation = '';
          card.style.animationDelay = (i * 0.07) + 's';
        });
        initSkillCardEffects();
      }, 50);
    });
  });

  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkillCardEffects);
  } else {
    initSkillCardEffects();
  }
})();
