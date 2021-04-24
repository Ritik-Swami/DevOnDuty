var header = new XMLHttpRequest();
var main = new XMLHttpRequest();
var footer = new XMLHttpRequest();
// var animate = new XMLHttpRequest();
header.open('GET', 'templates/header.html', true);
main.open('GET', 'templates/main.html', true);
footer.open('GET', 'templates/footer.html', true);
// animate.open('GET', 'templates/animate.html', true);

header.onload = function() {
    if (this.status === 200) {
        document.getElementById('header').innerHTML = this.responseText;
        const title = document.title;
        if (title === "Dev On Duty") {
            document.getElementById('h-header').style.display = "block";
            document.getElementById('a-header').style.display = "none";
            document.getElementById('c-header').style.display = "none";
            return
        }
        if (title === "DoD About") {
            document.getElementById('h-header').style.display = "none";
            document.getElementById('a-header').style.display = "block";
            document.getElementById('c-header').style.display = "none";
            return
        }
        if (title === "DoD Contact") {
            document.getElementById('h-header').style.display = "none";
            document.getElementById('a-header').style.display = "none";
            document.getElementById('c-header').style.display = "block";
            return
        }
    }
}
main.onload = function() {
    if (this.status === 200) {
        document.getElementById('main').innerHTML = this.responseText;
    }
}
footer.onload = function() {
        if (this.status === 200) {
            document.getElementById('footer').innerHTML = this.responseText;
        }
    }
    // animate.onload = function() {
    //     if (this.status === 200) {
    //         document.getElementById('animate').innerHTML = this.responseText;
    //     }
    // }

header.onerror = function() {
    console.log('Requist Erorr...');
}
main.onerror = function() {
    console.log('Requist Erorr...');
}
footer.onerror = function() {
        console.log('Requist Erorr...');
    }
    // animate.onerror = function() {
    //     console.log('Requist Erorr...');
    // }
header.send();
main.send();
footer.send();
// animate.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/Ritik-Swami-Jr/DevOnDuty/main/cards.json', true);

xhr.onload = function() {
    if (this.status === 200) {
        var card = JSON.parse(this.responseText);
        var output = '';
        for (var i in card) {
            output += "<div class='card' id='" + card[i].id + "' onclick='display_container(this.id)'>" +
                "<div class='content'>" +
                "<h2>" + card[i].title + "</h2>" +
                "<h1>" + card[i].card + "</h1>" +
                "<div class='ratings'>" +
                "<span>" + card[i].downloads + " Download</span>" +
                "<span>" + card[i].reviews + " Reviews</span>" +
                "</div>" +
                "</div>" +
                "</div>"
        }
        document.getElementById('container').innerHTML = output;
    }
}

xhr.send();