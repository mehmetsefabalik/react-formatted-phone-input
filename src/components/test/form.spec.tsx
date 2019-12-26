import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form } from '../form';

describe("React Phone Number Form Spec", () => {
  it("should set value of input", () => {
    // Arrange
    const phone = "0(555) 333 33 33";

    // Act
    const { container, getByText } = render(<Form />)
    fireEvent.change(container.getElementsByTagName("input")[0], { target: { value: `${phone}_` } });
    fireEvent.click(container.getElementsByTagName("button")[0]);

    // Assert
    expect(getByText("Success")).toBeDefined()
  });
});