function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Tampilkan section yang dipilih
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

// Search functionality
function searchActivity() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const activityCards = document.querySelectorAll('.activity-card');

    activityCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Testimoni Slider Navigation
let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('testimoni-slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.testimoni-slider');

    // Ensure the index is within the range of slides
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move the slider to the corresponding slide
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the first slide
showSlide(currentIndex);
