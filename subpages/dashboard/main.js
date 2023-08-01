function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("serverInfo").style.marginLeft = "250px";
    document.getElementById("serverStats").style.marginLeft = "250px";
    document.getElementById("serverStats").style.marginTop = "50px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
window.onload = function() {
    openNav()
};
  