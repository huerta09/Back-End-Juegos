// __tests__/example.test.js

// Ejemplo de función a probar
function sum(a, b) {
    return a + b;
  }
  
  // Prueba que verifica el comportamiento de la función sum
  test('sum of 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  