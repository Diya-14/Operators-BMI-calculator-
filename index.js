import inquirer from "inquirer";
async function main() {
  const { calculatorType } = await inquirer.prompt([
    {
      name: "calculatorType",
      type: "list",
      message: "Which calculator would you like to use?",
      choices: ["BMI Calculator", "Arithmetic Calculator"],
    },
  ]);
  if (calculatorType === "BMI Calculator") {
    await runBMICalculator();
  } else if (calculatorType === "Arithmetic Calculator") {
    await runArithmeticCalculator();
  }
}
async function runBMICalculator() {
  const { weight, height } = await inquirer.prompt([
    {
      name: "weight",
      type: "number",
      message: "Enter your weight (in kg):",
    },
    {
      name: "height",
      type: "number",
      message: "Enter your height (in meters):",
    },
  ]);
  const bmi = calculateBMI(weight, height);
  console.log("Your BMI is:", bmi);
}
function calculateBMI(weight, height) {
  return weight / (height * height);
}
async function runArithmeticCalculator() {
  const { operation, num1, num2 } = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Choose an operation:",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulus",
        "Exponentiation",
      ],
    },
    {
      name: "num1",
      type: "number",
      message: "Enter the first number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number:",
    },
  ]);
  const result = performOperation(operation, num1, num2);
  console.log(`The result of ${operation} is:`, result);
}
function performOperation(operation, num1, num2) {
  switch (operation) {
    case "Addition":
      return num1 + num2;
    case "Subtraction":
      return num1 - num2;
    case "Multiplication":
      return num1 * num2;
    case "Division":
      return num1 / num2;
    case "Modulus":
      return num1 % num2;
    case "Exponentiation":
      return Math.pow(num1, num2);
    default:
      throw new Error("Invalid operation");
  }
}
main();
