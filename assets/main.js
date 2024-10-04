document.getElementById('toggle-button').addEventListener('click', function() {
    const body = document.body; // Get the body element
    body.classList.toggle('theme-dark'); // Toggle the theme class
    this.classList.toggle('is-active'); // Toggle button state class
});

  