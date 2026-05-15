const calcularTotal = require('../services/compraService');

test('calcula correctamente el total de compra', () => {
    expect(calcularTotal(10, 5)).toBe(50);
});