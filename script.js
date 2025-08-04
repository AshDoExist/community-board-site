const announcements = [
  "Water supply will be cut on Aug 5 from 10AM to 2PM.",
  "Electricity maintenance on Aug 7, 11AM–1PM."
];

function renderAnnouncements() {
  const list = document.getElementById("announcement-list");
  list.innerHTML = "";

  announcements.forEach((text, index) => {
    const div = document.createElement("div");
    div.className = "announcement-item";
    div.innerHTML = `
      ${text}
      <button onclick="deleteAnnouncement(${index})" style="float:right;background:red;">✖</button>
    `;
    list.appendChild(div);
  });
}

function addAnnouncement() {
  const text = prompt("Enter your announcement:");
  if (text && text.trim() !== "") {
    announcements.unshift(text.trim());
    renderAnnouncements();
  }
}

function deleteAnnouncement(index) {
  if (confirm("Are you sure you want to delete this announcement?")) {
    announcements.splice(index, 1);
    renderAnnouncements();
  }
}

// Initial render
renderAnnouncements();
