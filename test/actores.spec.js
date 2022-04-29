const app = require('../index');
const request = require('supertest'); 

describe('GET actor', () =>{
    test("Retorna hello world", async()=>{
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
        expect()
        
    });

    test('Nos trae los actores registrados', async()=>{
        const response = await request(app).get('/actores')
        expect(response.statusCode).toBe(200)
    })

    test('Nos permite consultar el actor por el id', async()=>{
        const response = await request(app).get('/actores/:id')
        expect(response.statusCode).toBe(404)
    })
})

describe('POST actor', ()=>{
    test("Sube un nuevo actor", async()=>{
        const response = await request(app).post('/actor')
        expect(response.statusCode).toBe(400)
    })
})

describe('GET escuelas', ()=>{
    test("Nos muestra todas las escuelas", async()=>{
        const response = await request(app).get('/instituciones-educativas')
        expect(response.statusCode).toBe(500)
    })
})

describe('POST escuelas', ()=>{
    test("Sube una nueva escuela", async()=>{
        const response = await request(app).post('/instituciones-educativas')
        expect(response.statusCode).toBe(500)
    })
})
