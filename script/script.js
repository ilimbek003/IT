let btn = document.getElementById("myBtn");
let span = document.querySelector(".close");
let modal = document.querySelector(".modal__one")
let btnOne = document.querySelectorAll(".ton");

btn.onclick =  () => {
    modal.style.display = "block";
};

span.onclick =  () => {
    modal.style.display = "none";
};

window.onclick =  (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


btnOne.forEach((el) => {
    el.addEventListener("click", (event) => {
        modal.style.display = "block";
    });
});




let img = document.querySelectorAll(".modal-to")
let modalTwee = document.querySelector(".modal--one")


img.forEach((el) => {
    el.addEventListener("click", (event) => {
        modalTwee.style.display = "block";
    });
});



window.onclick =  (event) => {
    if (event.target === modalTwee) {
        modalTwee.style.display = "none";
    }
};



