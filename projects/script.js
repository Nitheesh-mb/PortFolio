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
    });

    
    if(typeof particlesJS !== 'undefined') {
        particlesJS("particles-js-work", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.34, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#8ea0c6", "opacity": 0.22, "width": 1 },
                "move": { "enable": true, "speed": 2.6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
            },
            "retina_detect": true
        });
    }
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Nitheesh M B";
            $("#favicon").attr("href", "../assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "../assets/images/favhand.png");
        }
    });



function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".projects-grid");
    let projectsHTML = "";
    projects.forEach(project => {
        
        let iconClass = "fas fa-file-code";
        if (project.category === "mern") iconClass = "fas fa-code";
        if (project.category === "android") iconClass = "fab fa-android";
        if (project.category === "lamp") iconClass = "fas fa-database";
        const imageHTML = project.image ? `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name} preview">
                </div>` : "";

        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="project-card">
                ${imageHTML}
                <div class="project-card-header">
                    <div class="project-icon">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="project-links">
                        <a href="${project.links.code}" target="_blank" rel="noopener noreferrer" title="GitHub Repo"><i class="fab fa-github"></i></a>
                        <a href="${project.links.view}" target="_blank" rel="noopener noreferrer" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tech">
                    ${project.tech.map(item => `<span>${item}</span>`).join("")}
                </div>
            </div>
        </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    
    var $grid = $('.projects-grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });

    
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})



var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
