// For Login Button
document.querySelector(".login-btn").addEventListener("click", () => {
    document.querySelector(".login-form-wrapper").classList.add("change");
    document.querySelector(".banner-text").classList.add("change");
})

document.querySelector(".login-x").addEventListener("click", () => {
    document.querySelector(".login-form-wrapper").classList.remove("change");
    document.querySelector(".banner-text").classList.remove("change");
})


// For Sign Up Button
document.querySelector(".signup-btn").addEventListener("click", () => {
    document.querySelector(".signup-form-wrapper").classList.add("changee");
    document.querySelector(".banner-text").classList.add("changee");
})

document.querySelector(".signup-x").addEventListener("click", () => {
    document.querySelector(".signup-form-wrapper").classList.remove("changee");
    document.querySelector(".banner-text").classList.remove("changee");
})