document.getElementById("opinionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const opinion = document.getElementById("opinion").value;

    // Here you would typically send this data to a backend server
    console.log({
        name: name,
        email: email,
        rating: rating,
        opinion: opinion
    });

    // Display a confirmation message
    const result = document.getElementById("result");
    result.innerHTML = `<h2>Thank you, ${name}!</h2><p>Your opinion has been recorded.</p>`;
    result.classList.remove("hidden");

    // Clear the form
    document.getElementById("opinionForm").reset();
});
