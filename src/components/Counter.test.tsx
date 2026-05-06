import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

const mockIncrement = vi.fn();
const mockDecrement = vi.fn();
const mockReset = vi.fn();

vi.mock("../stores/counterStore", () => ({
  useCounterStore: vi.fn(() => ({
    count: 0,
    increment: mockIncrement,
    decrement: mockDecrement,
    reset: mockReset,
  })),
}));

describe("Counter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("calls increment when increment button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(mockIncrement).toHaveBeenCalled();
  });

  it("calls decrement when decrement button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Decrement"));
    expect(mockDecrement).toHaveBeenCalled();
  });

  it("calls reset when reset button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Reset"));
    expect(mockReset).toHaveBeenCalled();
  });
});
