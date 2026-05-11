const request = require('supertest');
const app = require('../index');

describe('GET /products', () => {

    test('should return status 200', async () => {
        const response = await request(app).get('/products');

        expect(response.statusCode).toBe(200);
    });

    test('should return an array of products', async () => {
        const response = await request(app).get('/products');

        expect(Array.isArray(response.body)).toBe(true);
    });

});