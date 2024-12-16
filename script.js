// Sample guest data in JSON format
const guests = [
    {
        "name": "עידו בן אל",
        "table_number": 1,
        "number_of_guests": 3
    },
    {
        "name": "ביבי נתניהו",
        "table_number": 2,
        "number_of_guests": 4
    },
    {
        "name": "יוסף טרומפלדור",
        "table_number": 3,
        "number_of_guests": 2
    }
];

// Function to search for the guest by name
function searchGuest() {
    const name = document.getElementById("nameInput").value.trim();
    const resultElement = document.getElementById("result");
    const tableNumber = document.getElementById("tableNumber");
    const guestCount = document.getElementById("guestCount");

    // Reset result
    tableNumber.textContent = "Table Number: ";
    guestCount.textContent = "Number of Guests: ";

    if (name === "") {
        alert("Please enter a guest name.");
        return;
    }

    // Search for the guest
    const guest = guests.find(g => g.name.toLowerCase() === name.toLowerCase());

    if (guest) {
        tableNumber.textContent = "Table Number: " + guest.table_number;
        guestCount.textContent = "Number of Guests: " + guest.number_of_guests;
    } else {
        tableNumber.textContent = "Table Number: Not Found";
        guestCount.textContent = "Number of Guests: Not Found";
    }
}

