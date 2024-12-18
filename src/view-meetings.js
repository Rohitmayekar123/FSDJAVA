window.onload = function() {
    // Retrieve scheduled meetings from localStorage
    var meetings = JSON.parse(localStorage.getItem('meetings')) || [];

    var meetingsList = document.getElementById('meetingsList');

    if (meetings.length > 0) {
        meetings.forEach(function(meeting, index) {
            var meetingItem = document.createElement('div');
            meetingItem.classList.add('meeting-item');
            meetingItem.innerHTML = `
                <h3>${meeting.topic}</h3>
                <p>Start Time: ${new Date(meeting.startDateTime).toLocaleString()}</p>
                <p>End Time: ${new Date(meeting.endDateTime).toLocaleString()}</p>
                <p>Participants: ${meeting.numParticipants}</p>
                <button class="btn" onclick="deleteMeeting(${index})">Delete Meeting</button>
            `;
            meetingsList.appendChild(meetingItem);
        });
    } else {
        meetingsList.innerHTML = '<p>No meetings scheduled yet.</p>';
    }
};

// Function to delete a meeting
function deleteMeeting(index) {
    var meetings = JSON.parse(localStorage.getItem('meetings')) || [];
    meetings.splice(index, 1); // Remove the meeting
    localStorage.setItem('meetings', JSON.stringify(meetings)); // Update localStorage
    window.location.reload(); // Reload to reflect changes
}
