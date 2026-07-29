import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

it("renders the professional positioning and core sections", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.textContent).toContain("Software Engineer");
  expect(div.textContent).toContain("Automated Operations Engineer");
  expect(div.textContent).toContain("Selected Projects");
  expect(div.textContent).toContain("Early Alert Monitoring Platform");
  expect(div.textContent).toContain("+201064025940");
  expect(div.querySelector('a[href="tel:+201064025940"]')).not.toBeNull();
  expect(div.querySelector('a[href="https://wa.me/201064025940"]')).not.toBeNull();
  expect(div.querySelector("main")).not.toBeNull();
  expect(div.querySelector('a[href="#main-content"]')).not.toBeNull();
  ReactDOM.unmountComponentAtNode(div);
});
