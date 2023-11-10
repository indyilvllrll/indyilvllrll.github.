$(function() {
    // Array of different phrases to be displayed
    var words = [
        " struggling to learn programming until graduation day.",
        " converting caffeine to code with unpredictable outcomes.",
        " surviving on pizza, dreams, and questionable code.",
        " where syntax errors are just happy little accidents.",
        " questioning life choices after an all-nighter debugging.",
        " cramming last minute studying before the final test.",
        " googling solutions when the code won't compile.",
        " daydreaming about becoming the next tech billionaire.",
        " who only took IT because they say it has a lot of money.",
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

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll functionality for navigation links
    var navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Extract the target element's ID from the href attribute
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the target position, considering any offset
                var targetPosition = targetElement.offsetTop;

                // Adjust for any additional spacing (offset)
                var offset = 60; // You can adjust this value based on your layout

                // Scroll to the target position with smooth behavior
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
