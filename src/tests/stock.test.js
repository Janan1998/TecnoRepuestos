const calcularStock = require('../services/stockService');

test('calcula correctamente el stock restante', () => {
    expect(calcularStock(100, 20)).toBe(80);
});