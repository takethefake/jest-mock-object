import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

/* 

I'm currently only able to mock on per file level not on test level

jest.mock("./config", () => ({
  __esModule: true,
  default: { greeting: true },
}));

*/

describe("App", () => {
  it("renders hello if greeting true", () => {
    const { debug } = render(<App />);
    debug();
  });

  it("renders bye if greeting false", () => {
    jest.mock("./config", () => ({
      __esModule: true,
      default: { greeting: false },
    }));

    const { debug } = render(<App />);
    debug();
  });
});
