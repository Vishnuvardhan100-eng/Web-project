// Form validation
document.getElementById("tourForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let adults = document.getElementById("adults").value;
    
    if (!name || !email || !phone || !date || adults < 1) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    alert("Your tour has been booked successfully!");
    document.getElementById("tourForm").reset();
});
