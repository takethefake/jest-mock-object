import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
jest.mock("./config", () => ({ __esModule: true, useConfig: jest.fn() }));
import * as config from "./config";
const mockConfig = mocked(config);

import App from "./App";

describe("App", () => {
  it("renders bye if greeting false", async () => {
    mockConfig.useConfig.mockReturnValue({
      greet: false,
    });

    const { debug, container } = render(<App />);
    expect(container.querySelector("h1")?.textContent).toBe("Bye user");
    //config is jest.fn()
    debug();
  });

  it("renders bye if greeting true", async () => {
    mockConfig.useConfig.mockReturnValue({
      greet: true,
    });

    const { debug, container } = render(<App />);
    expect(container.querySelector("h1")?.textContent).toBe("Hello user");
    //config is jest.fn()
    debug();
  });
});
