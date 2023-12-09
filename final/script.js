/* js for default(reviews) */

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var courseName = document.getElementById('courseName').value;
    var reviewText = document.getElementById('reviewText').value;
    var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    var workload = document.querySelector('input[name="workload"]:checked').value;
    
    var reviews = JSON.parse(window.localStorage.getItem('reviews')) || [];
    var newReview = {courseName: courseName, reviewText: reviewText, difficulty: difficulty, workload: workload};
    reviews.push(newReview);
    
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
    
    displayReviews();
});

function toggleForm() {
    var form = document.getElementById('reviewForm');
    var button = document.getElementById('toggleButton');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        button.innerText = 'Hide Form';
    } else {
        form.classList.add('hidden');
        button.innerText = 'Reveal Form';
    }
}
function displayReviews() {
    var sortCategory = document.getElementById('sortSelect').value;
    var selectedCourse = document.getElementById('courseSelect').value; 
    var reviews = JSON.parse(window.localStorage.getItem('reviews')) || [];

    // Filter reviews based on the selected course
    var filteredReviews = reviews.filter(function(review) {
        return review.courseName === selectedCourse;
    });

    // Sort the filtered reviews
    filteredReviews.sort(function(a, b) {
        if (isNaN(a[sortCategory])) {
            return a[sortCategory] > b[sortCategory] ? 1 : -1;
        } else {
            return a[sortCategory] - b[sortCategory];
        }
    });

    var reviewsDisplay = document.getElementById('reviewsDisplay');
    reviewsDisplay.innerHTML = '';

    for (var i = 0; i < filteredReviews.length; i++) {
        var review = filteredReviews[i]; 
        var reviewElement = document.createElement('div');
        reviewElement.style.border = '1px solid black';
        reviewElement.style.margin = '10px';
        reviewElement.style.padding = '10px';
        reviewElement.textContent = 'Course: ' + review.courseName + ', Review: ' + review.reviewText + ', Difficulty: ' + review.difficulty + ', Workload: ' + review.workload;
        reviewsDisplay.appendChild(reviewElement);
    }

    document.getElementById('reviewsDisplay').style.display = 'block';
}


window.onload = function() {
    displayReviews();
};
