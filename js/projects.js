const webFilterBtn = document.querySelector(".web");
const androidFilterBtn = document.querySelector(".android");

const fetchWebProjects = () => {
    fetch('./assets/web.json')
    .then((response) => {
        return response.json();
    }).then((projects) => {
        // console.log(projects);
        appendData(projects.reverse());
    }).catch((e) => {
        console.log("Couldn't fetch projects. "+e);
    });
}

const fetchAndroidProjects = () => {
    fetch('./assets/android.json')
    .then((response) => {
        return response.json();
    }).then((projects) => {
        // console.log(projects);
        appendDataAndroid(projects.reverse());
    }).catch((e) => {
        console.log(e);
    });
}

function appendData(data) {
    const mainContainer = document.querySelector(".container");
    const androidContainer = document.querySelector(".container-android");
    androidContainer.style.display = "none";
    mainContainer.style.display = "block";
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.className = "project-details";

        const projectNameTag = document.createElement("h3");
        projectNameTag.className = "project-details-name";
        projectNameTag.innerHTML = data[i].projectName;

        const projectDescTag = document.createElement("p");
        projectDescTag.className = "project-details-desc";
        projectDescTag.innerHTML = data[i].projectDesc;

        const projectLiveBtnTag = document.createElement("button");
        const projectLiveAnc = document.createElement("a");
        const projectLive = document.createTextNode("Live");
        projectLiveBtnTag.className = "project-details-live-btn";
        projectLiveAnc.appendChild(projectLive);
        projectLiveAnc.href = data[i].projectLink;
        projectLiveBtnTag.appendChild(projectLiveAnc);

        const projectSourceBtnTag = document.createElement("button");
        const projectSourceAnc = document.createElement("a");
        const projectSource = document.createTextNode("Source");
        projectSourceBtnTag.className = "project-details-source-btn";
        projectSourceAnc.appendChild(projectSource);
        projectSourceAnc.href = data[i].projectSource;
        projectSourceBtnTag.appendChild(projectSourceAnc);

        mainContainer.appendChild(div);
        div.appendChild(projectNameTag);
        div.appendChild(projectDescTag);
        div.appendChild(projectLiveBtnTag);
        div.appendChild(projectSourceBtnTag);
    }
    
}

function appendDataAndroid(data) {
    const mainContainer = document.querySelector(".container-android");
    const webContainer = document.querySelector(".container");
    webContainer.style.display = "none";
    mainContainer.style.display = "block";
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.className = "project-details";

        const projectNameTag = document.createElement("h3");
        projectNameTag.className = "project-details-name";
        projectNameTag.innerHTML = data[i].projectName;

        const projectDescTag = document.createElement("p");
        projectDescTag.className = "project-details-desc";
        projectDescTag.innerHTML = data[i].projectDesc;

        const projectLiveBtnTag = document.createElement("button");
        const projectLiveAnc = document.createElement("a");
        const projectLive = document.createTextNode("Live");
        projectLiveBtnTag.className = "project-details-live-btn";
        projectLiveAnc.appendChild(projectLive);
        projectLiveAnc.href = data[i].projectLink;
        projectLiveBtnTag.appendChild(projectLiveAnc);

        const projectSourceBtnTag = document.createElement("button");
        const projectSourceAnc = document.createElement("a");
        const projectSource = document.createTextNode("Source");
        projectSourceBtnTag.className = "project-details-source-btn";
        projectSourceAnc.appendChild(projectSource);
        projectSourceAnc.href = data[i].projectSource;
        projectSourceBtnTag.appendChild(projectSourceAnc);

        mainContainer.appendChild(div);
        div.appendChild(projectNameTag);
        div.appendChild(projectDescTag);
        // div.appendChild(projectLiveBtnTag);
        div.appendChild(projectSourceBtnTag);
    }

}

fetchWebProjects();
webFilterBtn.addEventListener("click", fetchWebProjects);
androidFilterBtn.addEventListener("click", fetchAndroidProjects);