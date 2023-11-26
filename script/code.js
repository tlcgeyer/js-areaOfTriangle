// Function to calculate the area of a triangle
function calculateArea() {
    // Get values from input fields
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;

    // Validate input
    if (base === '' || height === '' || isNaN(base) || isNaN(height)) {
        alert('Please enter valid numbers for base and height.');
        return;
    }

    // Convert input values to numbers
    base = parseFloat(base);
    height = parseFloat(height);

    // Calculate the area of the triangle
    let area = 0.5 * base * height;

    // Display the result
    let resultElement = document.getElementById('result');
    resultElement.textContent = 'Area: ' + area;
}
