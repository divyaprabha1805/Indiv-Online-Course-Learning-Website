function toggleReviewContent(element) {
    var reviewContent = element.querySelector('.review-content');
    reviewContent.classList.toggle('open');
    if (reviewContent.classList.contains('open')) {
        document.getElementById('review').style.display = 'block';
    } else {
        document.getElementById('review').style.display = 'none';
    }
}
