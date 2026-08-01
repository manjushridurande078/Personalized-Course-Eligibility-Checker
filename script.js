
const learningTopics = [
    "JavaScript",
    "Web Development",
    "Data Structures"
];


// Display topics dynamically using DOM manipulation

const topicList = document.getElementById("topicList");

learningTopics.forEach(function(topic) {

    const listItem = document.createElement("li");

    listItem.textContent = topic;

    topicList.appendChild(listItem);

});


// Task 3:
// Function to determine eligibility

function checkEligibility(age, attendance, marks) {

    // Eligible condition
    if (age >= 18 && attendance >= 75 && marks >= 60) {

        return "Eligible";

    }

    // Improvement Required condition
    else if (attendance >= 60 && marks >= 40) {

        return "Improvement Required";

    }

    // Not Eligible condition
    else {

        return "Not Eligible";

    }
}


// Task 1 and Task 2:
// Form submission and validation

document.getElementById("eligibilityForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const age = Number(document.getElementById("age").value);
    const attendance = Number(
        document.getElementById("attendance").value
    );
    const marks = Number(
        document.getElementById("marks").value
    );

    // Check empty fields

    if (
        name === "" ||
        roll === "" ||
        age === 0 ||
        attendance === 0 ||
        marks === 0
    ) {

        alert("Please fill all fields.");
        return;

    }


    // Name validation

    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {

        alert("Name should contain only alphabets.");
        return;

    }


    // Roll Number validation using Regular Expression

    // Example format: ITB07

    const rollPattern = /^ITB[0-9]{2}$/;

    if (!rollPattern.test(roll)) {

        alert("Invalid Roll Number. Example: ITB07");
        return;

    }


    // Age validation

    if (age < 17 || age > 60) {

        alert("Please enter a valid age.");
        return;

    }


    // Attendance validation

    if (attendance < 0 || attendance > 100) {

        alert("Attendance must be between 0 and 100.");
        return;

    }


    // Marks validation

    if (marks < 0 || marks > 100) {

        alert("JavaScript marks must be between 0 and 100.");
        return;

    }


    // Call eligibility function

    const result = checkEligibility(
        age,
        attendance,
        marks
    );


    // Display result using DOM

    document.getElementById("result").innerHTML =
        "Student: " + name +
        "<br>Roll Number: " + roll +
        "<br>Eligibility Status: " + result;

});