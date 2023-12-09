document.getElementById('toggleButton').addEventListener('click', function() {
    var frame = document.getElementById('coursesFrame');
    if(frame.style.display === "none") {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }
});