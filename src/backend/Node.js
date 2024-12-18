const express = require('express');
const app = express();
const port = 3000;

// Dummy meetings data
let scheduledMeetings = [
    {
        id: 1,
        topic: "Team Sync",
        numberOfPeople: 5,
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        date: "12/20/2024",
    },
    {
        id: 2,
        topic: "Client Meeting",
        numberOfPeople: 3,
        startTime: "1:00 PM",
        endTime: "2:00 PM",
        date: "12/21/2024",
    },
];

// Endpoint to fetch scheduled meetings
app.get('/api/meetings', (req, res) => {
    res.json(scheduledMeetings);
});

// Endpoint to delete a meeting
app.delete('/api/meetings/:id', (req, res) => {
    const { id } = req.params;
    scheduledMeetings = scheduledMeetings.filter(meeting => meeting.id !== parseInt(id));
    res.status(200).send({ message: "Meeting deleted successfully." });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
