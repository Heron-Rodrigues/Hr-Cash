window.onscroll = () => {
    let navbar = document.querySelector("#navbar");
    let body = document.body;
    let docEl = document.documentElement;
    let inicioHeight = document.querySelector("#inicio").clientHeight;

    if (body.scrollTop >= 90 || docEl.scrollTop >= 90) {
        navbar.classList.add("style-1");
    }
    else {
        navbar.classList.remove("style-1");
    }
}
