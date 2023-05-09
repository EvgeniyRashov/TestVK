const form = document.getElementById('booking-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    tower: form.elements.tower.value,
    floor: form.elements.floor.value,
    room: form.elements.room.value,
    dateTime: form.elements['date-time'].value,
    comment: form.elements.comment.value,
  };
  console.log(JSON.stringify(data));
  const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', (event) => {
  form.reset();
});
});



