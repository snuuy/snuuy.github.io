$(document).ready(() => {
    $("#toggleBtn").click(() => {
        $("#portfolio").slideToggle()
        $("#toggleIcon").toggleClass("fa-chevron-up")
    });
});