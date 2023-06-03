function mesaj() {
    var mesajDiv = document.getElementById("mesajDiv");
    mesajDiv.style.display = "block";

    setTimeout(function() {
        mesajDiv.style.display = "none";
    }, 3000); // 3 saniye sonra mesajı gizle
}