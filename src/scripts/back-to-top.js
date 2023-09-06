export function scrollFunction(mybutton) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}