const menu = document.querySelectorAll(".logoAndMenu svg")[0];
const leftBar = document.querySelector(".leftBar");
const videos = document.querySelectorAll(".video");
const videoSection = document.querySelector(".videoSection");
const leftBarButtons = document.querySelectorAll(".leftBar button");
const svgInsideButtons = document.querySelectorAll(".leftBar button svg");
const buttonTexts = document.querySelectorAll(".leftBar button p");
const hidedButtons = document.querySelectorAll(".hided");
const profileImage = document.querySelector(".profileImage img");
const dropdownProfileSettings = document.querySelector(
    ".dropdownProfileSettings"
);
const uploadOptions = document.querySelector(".uploadOptions");
const gridBar = document.querySelector(".gridBar");
const boxForClose = document.querySelectorAll("#boxForClose");
const notifications = document.querySelector(".notifications");

//open profile settings
const tl = new TimelineMax();

const openUploadOptions = () => {};

uploadOptions.addEventListener("click", openUploadOptions, false);

var opened = 0;

function openFade(item) {
    boxForClose.forEach((box) => {
        box.style.opacity = 0;
        box.style.display = "none";
        box.style.zIndex = 10;
    });

    if (opened == 1) {
        opened = 0;
        tl.to(item, 0.2, {
            opacity: 0,
            ease: Power2.ease,
        }).to(item, 0.3, { display: "none" }, "-0.2");
        return;
    }

    opened = 1;
    tl.to(item, 0.1, { display: "block" }).to(item, 0.2, {
        opacity: 1,
        ease: Power2.ease,
    });
}

profileImage.addEventListener(
    "click",
    () => {
        openFade(dropdownProfileSettings);
    },
    false
);

uploadOptions.addEventListener(
    "click",
    () => {
        openFade(".uploadDropDownBar");
    },
    false
);

gridBar.addEventListener(
    "click",
    () => {
        openFade(".gridDropDown");
    },
    false
);

notifications.addEventListener(
    "click",
    () => {
        openFade(".notificationsDropDown");
    },
    false
);

//change Activy
function changeActiveItem(index) {
    for (let i = 0; i < buttonTexts.length; i++) {
        if (svgInsideButtons[i].style.fill == "white") {
            svgInsideButtons[i].style.fill = "#909090";
        }
    }

    svgInsideButtons[index].style.fill = "white";
}

// animating youtube side bar
var count = 0;

const changeWidth = () => {
    if (count == 1) {
        hidedButtons.forEach((btn) => {
            btn.style.display = "none";
        });
        leftBar.style.width = "5.3vw";
        leftBarButtons.forEach((btn, index) => {
            btn.style.height = "76px";
            btn.style.flexDirection = "column";
            btn.style.justifyContent = "center";
            svgInsideButtons[index].style.margin = "0";
            buttonTexts[index].style.fontSize = "10px";
            buttonTexts[index].style.color = "#909090";
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
    hidedButtons.forEach((btn) => {
        btn.style.display = "flex";
    });
    leftBar.style.width = "17.6vw";
    leftBarButtons.forEach((btn, index) => {
        btn.style.height = "45px";
        btn.style.flexDirection = "row";
        btn.style.justifyContent = "start";
        svgInsideButtons[index].style.margin = "40px";
        buttonTexts[index].style.fontSize = "1rem";
        buttonTexts[index].style.color = "white";
    });
    // videos.forEach((video) => {
    // video.style.width = "250px";
    // video.style.transform = "scale(0.9, 0.9)";
    // });
    videoSection.style.width = "82.4vw";
};

menu.addEventListener("click", changeWidth, false);
