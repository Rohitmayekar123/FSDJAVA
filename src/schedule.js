document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    var topic = document.getElementById('topic').value;
    var startDateTime = document.getElementById('startDateTime').value;
    var endDateTime = document.getElementById('endDateTime').value;
    var numParticipants = document.getElementById('numParticipants').value;

    // Create a meeting object to store the details
    var meeting = {
        topic: topic,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
        numParticipants: numParticipants
    };

    // Store the meeting in localStorage or another persistent method
    var meetings = JSON.parse(localStorage.getItem('meetings')) || [];
    meetings.push(meeting);
    localStorage.setItem('meetings', JSON.stringify(meetings));

    // Clear the form
    document.getElementById('scheduleForm').reset();

    // Show a confirmation or redirect to another page
    alert("Meeting scheduled successfully!");
    window.location.href = "view-meetings.html"; // Redirect to view meetings page
});
