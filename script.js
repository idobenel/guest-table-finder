// Guest data in JSON format
const guests = [
    {
        "שם_פרטי": "עידו",
        "שם_משפחה": "בן אל",
        "שולחן": 1
    },
    {
        "שם_פרטי": "ביבי",
        "שם_משפחה": "נתניהו",
        "שולחן": 2
    },
    {
        "שם_פרטי": "אליהו",
        "שם_משפחה": "הנביא",
        "שולחן": 3
    },
    {
        "שם_פרטי": "אליהו",
        "שם_משפחה": "התשבי",
        "שולחן": 3
    }
];

// Function to search for a guest by name
function searchGuest() {
    const nameInput = document.getElementById("nameInput").value.trim().toLowerCase(); // User input (case-insensitive)
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    if (nameInput === "") {
        alert("הכנס את שם האורח");
        return;
    }

    // Search for guests by combining first name and last name
    const matchingGuests = guests.filter(g => 
        `${g["שם_פרטי"]} ${g["שם_משפחה"]}`.toLowerCase().includes(nameInput)
    );

    if (matchingGuests.length > 0) {
        matchingGuests.forEach(guest => {
            const guestDiv = document.createElement("div");
            guestDiv.innerHTML = `
                <p>שם פרטי: ${guest["שם_פרטי"]}</p>
                <p>שם משפחה: ${guest["שם_משפחה"]}</p>
                <p>שולחן: ${guest["שולחן"]}</p>
                <br><br>
            `;
            resultElement.appendChild(guestDiv);
        });
    } else {
        const noMatchDiv = document.createElement("div");
        noMatchDiv.innerHTML = `
            <p>שם לא נמצא</p>
        `;
        resultElement.appendChild(noMatchDiv);
    }
}

// Function to search by table number
function searchByTable() {
    const tableInput = document.getElementById("tableInput").value.trim();
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    if (tableInput === "") {
        alert("הכנס את מספר שולחן");
        return;
    }

    // Search for guests by table number
    const matchingGuests = guests.filter(g => g["שולחן"] === parseInt(tableInput));

    if (matchingGuests.length > 0) {
        matchingGuests.forEach(guest => {
            const guestDiv = document.createElement("div");
            guestDiv.innerHTML = `
                <p>שם פרטי: ${guest["שם_פרטי"]}</p>
                <p>שם משפחה: ${guest["שם_משפחה"]}</p>
                <p>שולחן: ${guest["שולחן"]}</p>
                <br><br>
            `;
            resultElement.appendChild(guestDiv);
        });
    } else {
        const noMatchDiv = document.createElement("div");
        noMatchDiv.innerHTML = `
            <p>לא נמצא אורח עם מספר שולחן זה</p>
        `;
        resultElement.appendChild(noMatchDiv);
    }
}

// Function to display the full sorted list of guests
function displayFullList() {
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    // Sort guests by last name and then first name
    const sortedGuests = guests.sort((a, b) => {
        const nameA = `${a["שם_משפחה"]} ${a["שם_פרטי"]}`.toLowerCase();
        const nameB = `${b["שם_משפחה"]} ${b["שם_פרטי"]}`.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return a["שולחן"] - b["שולחן"];
    });

    // Display the sorted list
    sortedGuests.forEach(guest => {
        const guestDiv = document.createElement("div");
        guestDiv.innerHTML = `
            <p>שם פרטי: ${guest["שם_פרטי"]}</p>
            <p>שם משפחה: ${guest["שם_משפחה"]}</p>
            <p>שולחן: ${guest["שולחן"]}</p>
            <br><br>
        `;
        resultElement.appendChild(guestDiv);
    });
}

