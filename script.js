function generateGradient() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  var gradientType = document.getElementById('gradient-type').value;

  var gradientPreview = document.getElementById('gradient-preview');
  var cssCode;

  if (gradientType === 'linear') {
    cssCode = `background: linear-gradient(to right, ${color1}, ${color2});`;
    gradientPreview.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  } else if (gradientType === 'radial') {
    cssCode = `background: radial-gradient(circle, ${color1}, ${color2});`;
    gradientPreview.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
  }

  // Display and copy CSS code
  var cssCodeContainer = document.getElementById('css-code');
  cssCodeContainer.textContent = cssCode;

  // Select and copy to clipboard
  cssCodeContainer.select();
  document.execCommand('copy');
}
