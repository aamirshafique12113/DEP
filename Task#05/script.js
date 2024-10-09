document.getElementById("reservationForm").addEventListener("submit", function(event) {
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Validate Name
    const name = document.getElementById("name").value;
    if (!name) {
        document.getElementById("nameError").textContent = "Name is required.";
        document.getElementById("nameError").style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        document.getElementById("emailError").style.display = 'block';
        valid = false;
    }

    // Validate Date
    const date = document.getElementById("date").value;
    if (!date) {
        document.getElementById("dateError").textContent = "Reservation date is required.";
        document.getElementById("dateError").style.display = 'block';
        valid = false;
    }

    // Validate Guests
    const guests = document.getElementById("guests").value;
    if (!guests || guests < 1) {
        document.getElementById("guestsError").textContent = "Number of guests must be at least 1.";
        document.getElementById("guestsError").style.display = 'block';
        valid = false;
    }

    if (valid) {
        // Prevent default form submission
        event.preventDefault();

        // Display the submitted data
        const dataOutput = document.getElementById("dataOutput");
        dataOutput.innerHTML = `
            <div class="data-item"><strong>Name:</strong> ${name}</div>
            <div class="data-item"><strong>Email:</strong> ${email}</div>
            <div class="data-item"><strong>Reservation Date:</strong> ${date}</div>
            <div class="data-item"><strong>Number of Guests:</strong> ${guests}</div>
        `;

        // Show the submitted data section
        document.getElementById("submittedData").style.display = 'block';

        // Optionally, clear the form after submission
        document.getElementById("reservationForm").reset();
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
