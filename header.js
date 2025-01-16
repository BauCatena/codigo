let menuModal = document.getElementById("modalMenu")
let check = document.getElementById("check")

check.addEventListener("change", (e) => {
    if (check.checked) {
        menuModal.classList.toggle('active');
    }else {
        menuModal.classList.toggle('active');
    }

});
