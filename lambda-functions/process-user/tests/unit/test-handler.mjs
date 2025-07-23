"use strict";

import { handler } from "../../app.mjs";
import { expect } from "chai";

let event, context;

describe("process-user function", function () {
  it("verifies successful response", async () => {
    // Mock API Gateway event
    event = {
      body: JSON.stringify({
        userId: "12345",
        action: "create",
      }),
      // you can add headers, pathParameters, etc. here if needed
    };

    const result = await handler(event, context);

    // basic response structure
    expect(result).to.be.an("object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.a("string");

    // parse & validate body
    const payload = JSON.parse(result.body);
    expect(payload).to.be.an("object");
    expect(payload).to.have.property("message", "User processed!");
  });
});
