function close_popup() {
    document.getElementById("pop-up-window").style.display = 'none';
}

function display_container(e) {
    const web_container_data = document.getElementById(e);
    document.getElementById('pop-up-window').style.display = 'block';


    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'cards.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            var card = JSON.parse(this.responseText);
            for (var i in card) {
                if (card[i].id == e) {
                    document.getElementById('card-title').innerHTML = card[i].title;
                    document.getElementById('desktop-img').src = card[i].desktopimg;
                    document.getElementById('mobile-img').src = card[i].mobileimg;
                    document.getElementById('download_link').id = card[i].download_link;
                    document.getElementById('visit_link').id = card[i].visit_link;
                };
            }
        }
    }

    xhr.send();
}

function link(id) {
    window.open(id, "_blank");
}

function herf(id) {
    const home = document.getElementsByClassName('home');
    const about = document.getElementsByClassName('about');
    const contact = document.getElementsByClassName('contact');

    if (id === "home") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "block";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "none";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "none";
        }

        document.title = "Dev On Duty";
        return
    }
    if (id === "about") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "none";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "block";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "none";
        }

        document.title = "DoD About";
        return
    }
    if (id === "contact") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "none";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "none";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "block";
        }

        document.title = "DoD Contact";
        return
    }
    if (id === "sn-home-btn") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "block";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "none";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "none";
        }

        document.getElementById("nav-menu").style.width = "0";
        document.getElementById("side-navbar-close-btn").style.transform = "rotate(0deg)";

        document.title = "Dev On Duty";
        return
    }
    if (id === "sn-about-btn") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "none";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "block";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "none";
        }

        document.getElementById("nav-menu").style.width = "0";
        document.getElementById("side-navbar-close-btn").style.transform = "rotate(0deg)";
        document.title = "DoD About";
        return
    }
    if (id === "sn-contact-btn") {
        for (i = 0; i < home.length; i++) {
            home[i].style.display = "none";
        }
        for (i = 0; i < about.length; i++) {
            about[i].style.display = "none";
        }
        for (i = 0; i < contact.length; i++) {
            contact[i].style.display = "block";
        }

        document.getElementById("nav-menu").style.width = "0";
        document.getElementById("side-navbar-close-btn").style.transform = "rotate(0deg)";
        document.title = "DoD Contact";
        return
    }
}

function dark_light() {
    var r = document.querySelector(':root');
    const bg = document.body.id;
    if (bg === "dark") {
        document.getElementById("dark-light").style.transform = "rotate(360deg)";
        r.style.setProperty("--bg-color", "#ddd");
        r.style.setProperty("--text-color", "#222");
        r.style.setProperty("--text-color-hover", "black");
        r.style.setProperty("--card-bg-color", "rgba(17, 17, 17, .05)");
        document.body.id = "light";
    } else {
        document.getElementById("dark-light").style.transform = "rotate(0deg)";
        r.style.setProperty("--text-color", "#ddd");
        r.style.setProperty("--bg-color", "rgb(17, 17, 17)");
        r.style.setProperty("--text-color-hover", "white");
        r.style.setProperty("--card-bg-color", "rgba(221, 221, 221, .1)");
        document.body.id = "dark";
    }
}

function nav_menu() {
    document.getElementById("nav-menu").style.width = "90vw";
    document.getElementById("side-navbar-close-btn").style.transform = "rotate(90deg)";
}


function closeNav() {
    document.getElementById("nav-menu").style.width = "0";
    document.getElementById("side-navbar-close-btn").style.transform = "rotate(0deg)";
}

function animation() {
    const animate = document.querySelector('#animate');
    const createCircleElement = document.createElement('span');
    createCircleElement.className = "circle";
    const createSquareElement = document.createElement('span');
    createSquareElement.className = "square";

    createCircleElement.style.top = Math.random() * (innerHeight - 100) + "px";
    createCircleElement.style.left = Math.random() * (innerWidth - 50) + "px";
    createSquareElement.style.top = Math.random() * (innerHeight - 100) + "px";
    createSquareElement.style.left = Math.random() * (innerWidth - 30) + "px";
    animate.appendChild(createCircleElement);
    animate.appendChild(createSquareElement);

    setTimeout(() => {
        createCircleElement.remove()
    }, 1500)
    setTimeout(() => {
        createSquareElement.remove()
    }, 2000)
}
setInterval(animation, 1100)