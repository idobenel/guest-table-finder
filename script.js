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
        "name": "אליהו הנביא",
        "table_number": 3,
        "number_of_guests": 2
    }
];

// Function to search for the guest by name
function searchGuest() {
    const name = document.getElementById("nameInput").value.trim();
    const resultElement = document.getElementById("result");
    const guestName = document.getElementById("guestName");
    const tableNumber = document.getElementById("tableNumber");
    const guestCount = document.getElementById("guestCount");


    // Reset result
    guestName.textContent = "שם: ";
    tableNumber.textContent = "מספר שולחן: ";
    guestCount.textContent = "מספר אורחים: ";
    

    if (name === "") {
        alert("הכנס את שם האורח");
        return;
    }
    
    const normalizedName = name.normalize('NFC');

    // Search for the guest
    const guest = guests.find(g => (g.name.normalize('NFC')).includes(normalizedName));

    if (guest) {
        guestName.textContent = "שם: " + guest.name;
        tableNumber.textContent = "מספר שולחן: " + guest.table_number;
        guestCount.textContent = "מספר אורחים: " + guest.number_of_guests;
    } else {
    	guestName.textContent = "שם לא נמצא";
        tableNumber.textContent = "לא נמצא מספר שולחן";
        guestCount.textContent = "לא נמצאו מספר אורחים";
    }
}

