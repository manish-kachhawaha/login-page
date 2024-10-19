const loginBtn = document.getElementById("login-btn");

const modalBg = document.getElementById("login-bg")
const loginModal = document.getElementById("login-modal");

const displayModal = () =>{
    modalBg.style.display = "block";
    loginModal.style.display = "flex";
}

const closeModal= () =>{
    modalBg.style.display = "none";
    loginModal.style.display = "none";
}

// loginBtn.onclick = displayModal();
// modalBg.onclick = closeModal();

loginBtn.addEventListener("click", displayModal);
modalBg.addEventListener("click", closeModal)
