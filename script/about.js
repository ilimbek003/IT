let about = document.querySelector('.flexOne')
let open = document.querySelector('.faq')
let imgOne = document.querySelector(".min")
about.onclick = () => {
    if (open.style.maxHeight === "0px") {
        open.style.maxHeight = "500px"
    } else {
        open.style.maxHeight = "0px"
    }
}

imgOne.onclick = () => {
    imgOne.style.transform = 'rotate(360deg)'
}

let btnOne = document.getElementById("btn_one");
let spanOne = document.querySelector(".close-one");
let modalOne = document.querySelector(".modal--two")


btnOne.onclick = () => {
    modalOne.style.display = "block";
};

spanOne.onclick = () => {
    modalOne.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modalOne) {
        modalOne.style.display = "none";
    }
};

let img = document.querySelectorAll(".modal_to")
let modalTwee = document.querySelector(".modalOne")


img.forEach((el) => {
    el.addEventListener("click", (event) => {
        modalTwee.style.display = "block";
    });
});


window.onclick = (event) => {
    if (event.target === modalTwee) {
        modalTwee.style.display = "none";
    }
};

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
});

// $(document).ready(function (){
//     $(".slider").slick({
//         arrows: true,
//         dots: true,
//         adaptiveHeight: true,
//         slidesToShow: 3,
//     })
// })

let svg = document.querySelector('.svg-or')
let ad = document.querySelector('.ad-one')

svg.onclick = () => {
    if (ad.style.maxHeight === '60px') {
        ad.style.maxHeight = '100px'
        // ad.style.background = "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
        // ad.style.background ="transparent"
    } else {
        ad.style.maxHeight = '60px'
    }
}