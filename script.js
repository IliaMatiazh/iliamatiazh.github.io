function showModal(name) {
    var modal = document.getElementById(name);
    modal.classList.add("modal--show");
}

function closeModal(name) {
    var modal = document.getElementById(name);
    modal.classList.remove("modal--show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.target.classList.remove("modal--show");
}