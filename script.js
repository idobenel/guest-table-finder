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
    },
    {
        "name": "אליהו התשבי",
        "table_number": 5,
        "number_of_guests": 1
    }
];

// Function to search for the guest by name
function searchGuest() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();  // Ensure case-insensitivity
    const resultElement = document.getElementById("result");
    
    // Reset result
    resultElement.innerHTML = "";  // Clear previous results
    
    if (name === "") {
        alert("הכנס את שם האורח");
        return;
    }

    // Search for the guest (case insensitive comparison)
    const matchingGuests = guests.filter(g => g.name.toLowerCase().includes(name));

    if (matchingGuests.length > 0) {
        matchingGuests.forEach(guest => {
            // Create a new result block for each guest
            const guestDiv = document.createElement("div");
            guestDiv.innerHTML = `
                <p>שם: ${guest.name}</p>
                <p>מספר שולחן: ${guest.table_number}</p>
                <p>מספר אורחים: ${guest.number_of_guests}</p>
                <br><br>
            `;
            resultElement.appendChild(guestDiv);  // Append to the result section
        });
    } else {
        const noMatchDiv = document.createElement("div");
        noMatchDiv.innerHTML = `
            <p>שם לא נמצא</p>
            <p>לא נמצאו מספר שולחן</p>
            <p>לא נמצאו מספר אורחים</p>
        `;
        resultElement.appendChild(noMatchDiv);
    }
}

// Function to search for the guest by name or table number
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
        alert("הכנס את שם האורח או מספר שולחן");
        return;
    }

    // Check which search type is selected
    const searchByName = document.getElementById("searchByName").checked;
    const searchByTable = document.getElementById("searchByTable").checked;

    let guest;

    if (searchByName) {
        // Search by name
        guest = guests.find(g => g.name.includes(name));
    } else if (searchByTable) {
        // Search by table number
        const tableNumberSearch = parseInt(name, 10);
        guest = guests.find(g => g.table_number === tableNumberSearch);
    }

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
