$(function() {
    // Array of different phrases to be displayed
    var words = [
        " awaken your inner flower child",
        " channel your free spirit.",
        " embrace your unique beauty.",
        " spark childlike wonder.",
        " unlock a softer, kinder world.",
        " let your true colors shine.",
        " help you stand out from the crowd.",
    ];

    var index = 0;
    var span = $(".main_wrapper h2 span");

    // Function to change the displayed word in a fading manner
    function changeWord() {
        span.fadeOut(function() {
            $(this).text(words[index]).fadeIn();
        });

        index = (index + 1) % words.length;
    }

    // Set an interval to change the word every 3 seconds
    setInterval(changeWord, 3000);
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Smooth scroll functionality for navigation links
//     var navLinks = document.querySelectorAll('.nav-links a');

//     navLinks.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();

//             // Extract the target element's ID from the href attribute
//             var targetId = this.getAttribute('href').substring(1);
//             var targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 // Calculate the target position, considering any offset
//                 var targetPosition = targetElement.offsetTop;

//                 // Adjust for any additional spacing (offset)
//                 var offset = 60; // You can adjust this value based on your layout

//                 // Scroll to the target position with smooth behavior
//                 window.scrollTo({
//                     top: targetPosition - offset,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

// Slideshow images
var images = [ 'images/makeup4.jpg', 'images/makeup2.jpg', 'images/makeup6.jpg'];
var currentIndex = 0;

// Function to change background image
function changeBackground() {
    document.getElementById('home').style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background image every 6 seconds
setInterval(changeBackground, 4000);


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to reveal content with sliding animation
function revealContent() {
    const aboutArticle = document.getElementById('about-article');
    const communityArticle = document.getElementById('community-article');
    const mediaArticle = document.getElementById('media-article');
    
    if (isInViewport(aboutArticle)) {
        aboutArticle.classList.add('visible');
    }
    if (isInViewport(mediaArticle)) {
        mediaArticle.classList.add('visible');
    }

    // Check if Community section is in viewport
    if (isInViewport(communityArticle)) {
        communityArticle.classList.add('visible');
    }

    // Remove the scroll event listener if all sections are visible
    if (aboutArticle.classList.contains('visible') && 
        communityArticle.classList.contains('visible') && 
        mediaArticle.classList.contains('visible')) {
        window.removeEventListener('scroll', revealContent);
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', revealContent);

// Call revealContent function once on page load to check if any section is initially in the viewport
revealContent();


