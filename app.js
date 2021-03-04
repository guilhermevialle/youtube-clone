const menu = document.querySelectorAll(".logoAndMenu svg")[0];
const leftBar = document.querySelector(".leftBar");
const videos = document.querySelectorAll(".video");
const videoSection = document.querySelector(".videoSection");
const leftBarButtons = document.querySelectorAll(".leftBar button");
const svgInsideButtons = document.querySelectorAll(".leftBar button svg");
const buttonTexts = document.querySelectorAll(".leftBar button p");

//change Activy
function changeActiveItem(index) {
    for (let i = 0; i < buttonTexts.length; i++) {
        if (svgInsideButtons[i].style.fill == "white") {
            svgInsideButtons[i].style.fill = "#909090";
            buttonTexts[i].style.color = "#909090";
        }
    }

    buttonTexts[index].style.color = "white";
    svgInsideButtons[index].style.fill = "white";
}

// animating youtube side bar
var count = 0;

const changeWidth = () => {
    if (count == 1) {
        leftBar.style.width = "5.3vw";
        leftBar.style.backgroundColor = "#252525";
        leftBarButtons.forEach((btn, index) => {
            btn.style.height = "76px";
            btn.style.flexDirection = "column";
            btn.style.justifyContent = "center";
            svgInsideButtons[index].style.margin = "0";
            buttonTexts[index].style.fontSize = "10px";
        });
        // videos.forEach((video) => {
        // video.style.width = "292px";
        // video.style.height = "315px";
        // video.style.transform = "scale(1, 1)";
        // });
        videoSection.style.width = "94vw";
        count = 0;
        return;
    }

    count = 1;
    leftBar.style.width = "17.6vw";
    leftBar.style.backgroundColor = "#202020";
    leftBarButtons.forEach((btn, index) => {
        btn.style.height = "50px";
        btn.style.flexDirection = "row";
        btn.style.justifyContent = "start";
        svgInsideButtons[index].style.margin = "40px";
        buttonTexts[index].style.fontSize = "1rem";
    });
    // videos.forEach((video) => {
    // video.style.width = "250px";
    // video.style.transform = "scale(0.9, 0.9)";
    // });
    videoSection.style.width = "82.4vw";
};

menu.addEventListener("click", changeWidth, false);
