let darkMode = localStorage.getItem("darkMode");
const toggleBtn = document.querySelector(".header__btn");

function enableDark() {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");        
    toggleBtn.firstElementChild.style.left = "27.3px";
}
function disableDark() {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    toggleBtn.firstElementChild.style.left = "";
}
if (darkMode === "enabled") {
    enableDark();
}
toggleBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDark();
    } else {        
        disableDark();

    }
});