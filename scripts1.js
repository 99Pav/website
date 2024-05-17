document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const interestedBtn = document.getElementById('interested-btn');
    const notInterestedBtn = document.getElementById('not-interested-btn');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingCategory = star.parentElement;
            ratingCategory.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            star.style.color = '#f39c12';

            let prevSibling = star.previousElementSibling;
            while (prevSibling) {
                prevSibling.classList.add('selected');
                prevSibling = prevSibling.previousElementSibling;
            }

            let nextSibling = star.nextElementSibling;
            while (nextSibling) {
                nextSibling.classList.remove('selected');
                nextSibling.style.color = '#ccc';
                nextSibling = nextSibling.nextElementSibling;
            }
        });
    });

    interestedBtn.addEventListener('click', () => {
        interestedBtn.classList.add('active');
        notInterestedBtn.classList.remove('active');
    });

    notInterestedBtn.addEventListener('click', () => {
        notInterestedBtn.classList.add('active');
        interestedBtn.classList.remove('active');
    });
});
