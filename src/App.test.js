import React from "react";
import {render, cleanup} from "@testing-library/react";
import {afterEach, describe, expect, it} from "vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  it("renders the professional positioning and core sections", () => {
    const {container} = render(<App />);
    expect(container.textContent).toContain("Software Engineer");
    expect(container.textContent).toContain("Automated Operations Engineer");
    expect(container.textContent).toContain("Selected Projects");
    expect(container.textContent).toContain("Early Alert Monitoring Platform");
    expect(container.textContent).toContain("+201064025940");
    expect(
      container.querySelector('a[href="tel:+201064025940"]')
    ).not.toBeNull();
    expect(
      container.querySelector('a[href="https://wa.me/201064025940"]')
    ).not.toBeNull();
    expect(container.querySelector("main")).not.toBeNull();
    expect(container.querySelector('a[href="#main-content"]')).not.toBeNull();
  });
});
