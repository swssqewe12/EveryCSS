nav_links = []

window.addEventListener("load", function()
{
    var links = document.querySelectorAll('#nav a');
    for (var link of links)
        nav_links.push([link, window[link.href.split("#")[1]]])
    nav_onscroll();
    
})

window.addEventListener("scroll", nav_onscroll)

function nav_onscroll()
{
    navheight.style.height = nav.offsetHeight + "px";

    var ww = window.innerWidth || document.documentElement.clientWidth;

    if (document.body.scrollTop > 197 && ww > 767)
    {
        nav.classList.add("fixed");
    }
    else
    {
        nav.classList.remove("fixed");
    }

    if (ww <= 767) return;

    for (var link of nav_links) {
        if (isElementInViewport(link[1])) {
            link[0].classList.add("selected");
        }
        else {
            link[0].classList.remove("selected");
        }
    }
}

function isElementInViewport(el)
{
    var rect = el.getBoundingClientRect();
    ww = window.innerWidth || document.documentElement.clientWidth;
    wh = window.innerHeight || document.documentElement.clientHeight

    return (
        rect.left < ww &&
        rect.right > 0 &&
        rect.top < wh &&
        rect.bottom > 0
    );
}