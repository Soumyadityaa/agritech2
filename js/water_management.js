document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission
    document.getElementById('problem-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const problemType = document.getElementById('problem-type').value;
        const description = document.getElementById('description').value;
        const location = document.getElementById('location').value;

        // In a real app, you would send this data to a server for processing.
        // For now, we'll just display it in an alert.
        const formData = {
            problemType,
            description,
            location
        };

        alert('Report submitted successfully!\n\nProblem Type: ' + formData.problemType + '\nDescription: ' + formData.description + '\nLocation: ' + formData.location);

        // Reset the form
        document.getElementById('problem-form').reset();
    });
});
