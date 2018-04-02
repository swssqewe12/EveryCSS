function toggleSearch()
{
    var input = document.querySelector(".search");
    var img = input.querySelector("img");

    if (input.classList.contains("visible"))
    {
        input.classList.remove("visible");
        img.src = "/img/search.png";
    }
    else
    {
        input.classList.add("visible");
        input.querySelector("input").focus();
        img.src = "/img/cancel.png";
    }
}

function goAheadAndSearch()
{
    var input = document.querySelector(".search input");
    window.location = "/search#" + input.value;
}

function searchKeyDown(event)
{
    if (event.keyCode == 13)
        goAheadAndSearch();
}