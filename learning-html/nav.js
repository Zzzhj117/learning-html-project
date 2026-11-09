document.addEventListener("DOMContentLoaded", function() {
    var headerElement = document.querySelector("header");
    
    if (headerElement) {
        var navHTML = "<nav>";
        navHTML += "<a href='index.html'>Home</a>";
        navHTML += "<a href='quotes.html'>Quotes</a>";
        navHTML += "<a href='projects.html'>Projects</a>";
        navHTML += "<a href='machine.html'>Machine</a>";
        navHTML += "</nav>";
        
        headerElement.innerHTML = navHTML;
    }
});