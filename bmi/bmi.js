document.getElementById('calculate-btn').addEventListener('click', function() {
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const resultContainer = document.getElementById('result-container');
    const bmiValueSpan = document.getElementById('bmi-value');
    const analysisText = document.getElementById('bmi-analysis');

    if (height > 0 && weight > 0) {
        // BMI Formula: weight (kg) / (height (m) * height (m))
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        // Show the result
        bmiValueSpan.textContent = bmi;
        resultContainer.classList.remove('hidden');

        // Reset table highlights
        document.querySelectorAll('tr').forEach(tr => tr.style.backgroundColor = "");

        // Analysis & Highlighting logic
        let message = "";
        let rowId = "";

        if (bmi < 18.5) {
            message = "Your BMI is low. You are considered underweight.";
            rowId = "category-under";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            message = "Your BMI is normal. Great job!";
            rowId = "category-normal";
        } else if (bmi >= 25 && bmi <= 29.9) {
            message = "Your BMI is high. You are considered overweight.";
            rowId = "category-over";
        } else {
            message = "Your BMI is very high. You are in the obese category.";
            rowId = "category-obese";
        }

        analysisText.textContent = message;
        document.getElementById(rowId).style.backgroundColor = "#d4edda"; // Highlight row green
    } else {
        alert("Please enter valid height and weight!");
    }
});