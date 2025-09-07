document.getElementById("cancelForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;
  const details = document.getElementById("details").value;

  // Simulate form submission (replace this with Formspree/Getform later)
  const msg = document.getElementById("message");
  msg.classList.remove("hidden");
  msg.style.background = "#d4edda";
  msg.style.color = "#155724";
  msg.innerHTML = `✅ Thank you, ${name}. Your request to cancel the charge from <b>${company}</b> has been received. We will contact you at <b>${email}</b>.`;

  // Clear form
  document.getElementById("cancelForm").reset();
});
