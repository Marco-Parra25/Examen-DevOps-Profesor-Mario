const request = require("supertest");
const { app } = require("../app");

// Pruebas automatizadas de la API (se ejecutan en el pipeline de CI/CD).
describe("API Tienda de Perritos", () => {

  test("GET /api/health responde 200 y estado ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("POST /api/productos sin datos obligatorios responde 400", async () => {
    const res = await request(app).post("/api/productos").send({ descripcion: "sin nombre" });
    expect(res.status).toBe(400);
  });
});
