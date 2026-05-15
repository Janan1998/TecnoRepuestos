const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('debe responder correctamente', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);
        expect(res.body.mensaje).toBe('Servidor funcionando');
    });
});