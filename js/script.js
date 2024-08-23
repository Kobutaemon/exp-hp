function applicant_form() {
    window.open("https://forms.gle/26M9VX1cxfs2J95L8", "_blank");
}

function contact_form() {
    window.open("https://forms.gle/biw6bn82gGAfy4uX6", "_blank");
}

function toggle_class() {
    let hamburger = document.querySelector(".hamburger-list");
    hamburger.classList.toggle("active");

    let page1 = document.querySelector(".page1");
    page1.classList.toggle("blur");

    // let haeder = document.querySelector("header");
    // haeder.classList.toggle("bgc-gray");
}