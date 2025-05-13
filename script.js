document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (!height || !weight) {
    result.textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obese';

  result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
});
