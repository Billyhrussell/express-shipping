"use strict";

const AxiosMockAdaptor = require("axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdaptor(axios);

const SHIPIT_SHIP_URL = "http://localhost:3001/ship";

const {
  shipProduct,
} = require("./shipItApi");


test("shipProduct", async function () {
  
  axiosMock.onPost(SHIPIT_SHIP_URL).reply(200, {"receipt": {"shipId": 2000}});
  
  const shipId = await shipProduct({
    productId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
  });

  expect(shipId).toEqual(2000);
});
