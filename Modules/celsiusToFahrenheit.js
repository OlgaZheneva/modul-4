function celsiusToFahrenheit(c) {
  const w = 1.8; 
  const b = 32; 
  const f = (c * w) + b; 
  return f;       
}

export {celsiusToFahrenheit};