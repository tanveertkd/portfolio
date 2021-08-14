fetch('./assets/blogs.json')
    .then((response) => {
        return response.json();
    })
    .then((blogs) => {
        console.log(blogs);
        showBlogs(blogs);
    })
    .catch((e) => {
        showError(e);
});

const showBlogs = (data) => {
    const mainContainer = document.querySelector(".container");

    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.className = "project-details";

        const projectNameTag = document.createElement("h3");
        projectNameTag.className = "project-details-name";
        projectNameTag.innerHTML = data[i].blogName;

        const projectDescTag = document.createElement("p");
        projectDescTag.className = "project-details-desc";
        projectDescTag.innerHTML = data[i].blogDesc;

        const projectLiveBtnTag = document.createElement("button");
        const projectLiveAnc = document.createElement("a");
        const projectLive = document.createTextNode("Read More");
        projectLiveBtnTag.className = "project-details-live-btn";
        projectLiveAnc.appendChild(projectLive);
        projectLiveAnc.href = data[i].blogLink;
        projectLiveBtnTag.appendChild(projectLiveAnc);

        // const projectSourceBtnTag = document.createElement("button");
        // const projectSourceAnc = document.createElement("a");
        // const projectSource = document.createTextNode("Source");
        // projectSourceBtnTag.className = "project-details-source-btn";
        // projectSourceAnc.appendChild(projectSource);
        // projectSourceAnc.href = data[i].projectSource;
        // projectSourceBtnTag.appendChild(projectSourceAnc);

        mainContainer.appendChild(div);
        div.appendChild(projectNameTag);
        div.appendChild(projectDescTag);
        div.appendChild(projectLiveBtnTag);
        // div.appendChild(projectSourceBtnTag);
    }
}

const showError = (e) => {

}