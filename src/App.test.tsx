import React from "react";
import { render } from "@testing-library/react";
jest.mock("./config", () => jest.fn());
import * as config from "./config";
const mockConfig = (config as unknown) as jest.Mock;
import App from "./App";

describe("App", () => {
  beforeEach(async () => {
    jest.resetModules();
  });
  it("renders bye if greeting false", async () => {
    mockConfig.mockImplementation(() => ({
      greet: false,
    }));

    const { debug, container } = render(<App />);
    expect(container.querySelector("h1")?.textContent).toBe("Bye user");
    //config is jest.fn()
    debug();
  });

  it("renders bye if greeting true", async () => {
    mockConfig.mockImplementation(() => ({
      greet: true,
    }));

    const { debug, container } = render(<App />);
    expect(container.querySelector("h1")?.textContent).toBe("Hello user");
    //config is jest.fn()
    debug();
  });
});
