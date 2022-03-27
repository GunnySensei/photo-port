import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "I know exactly what he's talking about. I sprout mung beans on a damp paper towel in my desk drawer. Very nutritious, but they smell like death.",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    //baseline render component test
    <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />;
  });

  //snapsot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
