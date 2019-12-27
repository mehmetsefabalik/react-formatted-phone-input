import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditForm } from '../edit-form';

describe("Edit Form Spec", () => {
  it("should set given phone prop as value of phone input", () => {
    // Arrange
    const phone = "0(555) 333 33 33";
    const data = {
      phone
    };

    // Act
    const { container, debug } = render(<EditForm data={data} />)
    debug();
    // Assert
    expect(container.getElementsByTagName("input")[0].getAttribute("value")).toEqual(phone)

  });
});