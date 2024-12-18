document.addEventListener("DOMContentLoaded", () => {
  const scheduleForm = document.getElementById("scheduleForm") as HTMLFormElement;

  scheduleForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Fetch input values
    const topic = (document.getElementById("topic") as HTMLInputElement).value;
    const startDateTime = (document.getElementById("startDateTime") as HTMLInputElement).value;
    const endDateTime = (document.getElementById("endDateTime") as HTMLInputElement).value;
    const numParticipants = parseInt(
      (document.getElementById("numParticipants") as HTMLInputElement).value
    );

    // Validate date and time inputs
    if (new Date(startDateTime) >= new Date(endDateTime)) {
      alert("End date and time must be after the start date and time!");
      return;
    }

    // Show confirmation
    alert(
      `Meeting Scheduled:\n\nTopic: ${topic}\nStart: ${startDateTime}\nEnd: ${endDateTime}\nParticipants: ${numParticipants}`
    );

    // Reset form
    scheduleForm.reset();
  });
});
