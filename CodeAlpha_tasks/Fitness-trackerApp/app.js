let entries = JSON.parse(localStorage.getItem("fitness")) || [];

document.getElementById("fitnessForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let workout = document.getElementById("workout").value;
    let calories = document.getElementById("calories").value;
    let steps = document.getElementById("steps").value;

    let data = { workout, calories, steps };
    entries.push(data);

    localStorage.setItem("fitness", JSON.stringify(entries));
    showSummary();
});

function showSummary() {
    let summaryDiv = document.getElementById("summary");
    summaryDiv.innerHTML = "";

    let totalCalories = 0;
    let totalSteps = 0;

    entries.forEach(e => {
        totalCalories += Number(e.calories);
        totalSteps += Number(e.steps);
    });

    summaryDiv.innerHTML = `
        <p><strong>Total Calories:</strong> ${totalCalories}</p>
        <p><strong>Total Steps:</strong> ${totalSteps}</p>
    `;
}

showSummary();
