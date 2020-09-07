$(document).ready(() => {
    if (window.location.hash == "#portfolio") {
        $("#portfolio").slideToggle()
    }
    
    $("#toggleBtn").click(() => {
        $("#portfolio").slideToggle()
        $("#toggleIcon").toggleClass("fa-chevron-up")
    });
});