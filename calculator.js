function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
}
try {
    // Convert trigonometric function inputs from degrees to radians
    expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
    expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
    expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

    result = math.evaluate(expression);
    display.value = result;
} catch (error) {
    display.value = "Error";
}