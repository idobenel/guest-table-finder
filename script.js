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
