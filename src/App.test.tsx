import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

/* 

I'm currently only able to mock on per file level not on test level

jest.mock("./config", () => ({
  __esModule: true,
  default: { greeting: true },
}));
*/

describe("App", () => {
  afterEach(() => {
    jest.resetModules();
  });
  it("renders bye if greeting false", () => {
    jest.doMock("./config", () => ({
      __esModule: true,
      default: { greet: false },
    }));

    import("./App").then((module) => {
      const { debug } = render(<module.default />);
      debug();
    });

    // should render Bye user
  });
  it("renders hello if greeting true", () => {
    jest.doMock("./config", () => ({
      __esModule: true,
      default: { greet: true },
    }));
    import("./App").then((module) => {
      const { debug } = render(<module.default />);

      debug();
    });
    // should render Hello user
  });
});
