$(document).ready(() => {
    if (window.location.hash == "#portfolio" || window.location.hash == "#cpcheats") {
        $("#portfolio").slideToggle()
        $("#toggleIcon").toggleClass("fa-chevron-up")
    }

    if (window.location.hash == "#cpcheats") {
        $('#proj1').modal('toggle')
    }

    $("#toggleBtn").click(() => {
        $("#portfolio").slideToggle()
        $("#toggleIcon").toggleClass("fa-chevron-up")
    });
});