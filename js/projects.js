const webFilterBtn = document.querySelector(".web");
const androidFilterBtn = document.querySelector(".android");

var webLoadFlag = 1;
var androidLoadFlag = 0;

const fetchWebProjects = () => {
    fetch('./assets/web.json')
    .then((response) => {
        return response.json();
    }).then((projects) => {
        // console.log(projects);
        showWebProjects(projects.reverse());
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
        showAndroidProjects(projects.reverse());
    }).catch((e) => {
        console.log(e);
    });
}

const showWebProjects =(data) => {
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

const showAndroidProjects = (data) => {
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

webFilterBtn.addEventListener("click", (webLoadFlag === 0) ? fetchWebProjects : showWebProjects);

androidFilterBtn.addEventListener("click", () => {
    if(androidLoadFlag === 0){
        androidLoadFlag = 1;
        fetchAndroidProjects();
    }else{
        showAndroidProjects();
    }
});

//0 load
//1 already loaded

