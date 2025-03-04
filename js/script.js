document.addEventListener("DOMContentLoaded", () => {
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "yellow";  
        }
    });
});