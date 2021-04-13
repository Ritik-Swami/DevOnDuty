var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/Ritik-Swami-Jr/DevOnDuty/main/webdata.json', true);

xhr.onload = function() {
    if (this.status === 200) {
        var webdata = JSON.parse(this.responseText);
        var output = '';
        for (var i in webdata) {
            output += "<div class='card c-" + i + "' id='" + webdata[i].id + "' onclick='display_container(this.id)'>" +
                "<h1>" + webdata[i].card + "</h1>" +
                "<p>" + webdata[i].title + "</p>" +
                "</div>"
        }
        document.getElementById('cards').innerHTML = output;
    }
}

xhr.send();

var container_xml = new XMLHttpRequest();
container_xml.open('GET', 'templates/container.html', true);

container_xml.onload = function() {
    if (this.status === 200) {
        document.getElementById('info-container').innerHTML = this.responseText;
    }
}

container_xml.onerror = function() {
    console.log('Requist Erorr...');
}
container_xml.send();



function display_container(e) {
    const web_container_data = document.getElementById(e);
    document.getElementById('info-container').style.display = 'block';


    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Ritik-Swami-Jr/DevOnDuty/main/webdata.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            var webdata = JSON.parse(this.responseText);
            for (var i in webdata) {
                if (webdata[i].id == e) {
                    document.getElementById('box-container-header').innerHTML = webdata[i].title;
                    document.getElementById('desktop-img').src = webdata[i].desktopimg;
                    document.getElementById('mobile-img').src = webdata[i].mobileimg;
                    console.log(webdata[i].download_link, webdata[i].visit_link + "LINK AVAILABLE");
                    document.getElementById('download_link').id = webdata[i].download_link;
                    document.getElementById('visit_link').id = webdata[i].visit_link;
                };
            }
        }
    }

    xhr.send();
    console.log(e)
}

function close_container() {
    document.getElementById('info-container').style.display = 'none';
}

const click = document.getElementById('card').addEventListener("click", link);

function link(id) {
    window.location.assign(id)
}
