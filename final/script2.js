/* js for home */

document.getElementById('toggleButton').addEventListener('click', function() {
    var frame = document.getElementById('coursesFrame');
    if(frame.style.display === "none") {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }
});

function toggleVisibility(id) {
    var frame = document.getElementById(id);
    if(frame.style.display === 'none') {
        frame.style.display = 'block';
    } else {
        frame.style.display = 'none';
    }
}
