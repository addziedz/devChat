const httpClient = require('supertest');
const appFactory = require('../src/app');

describe('Application test', () => {
    it('Should display simple answer from server', async () => {
        const app = await appFactory();

        return httpClient(app)
            .get('/')
            .expect("<h1>HELLO KITOWCY!</h1>" +
                "<br/>" +
                "<img src='https://nieprzywiedlny.files.wordpress.com/2015/11/kitowcy.jpg?w=640'/>")
    });
});