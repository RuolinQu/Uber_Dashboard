let handleClick = (clicked_id) => {
    let sec;
    if (clicked_id === "button_1") {
        sec = document.getElementById("section1")
    } else if (clicked_id === "button_2") {
        sec = document.getElementById("section2")
    }
    else if (clicked_id === "button_3") {
        sec = document.getElementById("section3")
    }
    else if (clicked_id === "button_4") {
        sec = document.getElementById("section4")
    }
    if (sec.classList.contains('hidden')) {
        sec.classList.remove('hidden')
    } else {
        sec.classList.add('hidden')
    }
}