import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "@/pages/about";
describe("Footer", () => {
  it("renders About Us heading", () => {
    render(<AboutUs />);

    // Arrange

    const heading = screen.getByRole("heading", { name: /about us/i });

    //Act
    //Assert
    expect(heading).toBeInTheDocument();
  });

  it("renders mission card", () => {
    render(<AboutUs />);
    // Arrange

    const missionCard = screen.getByAltText("mission");
    //Act
    //Assert
    expect(missionCard).toBeInTheDocument();
  });

  it('renders "Why Choose Us?" card', () => {
    render(<AboutUs />);
    // Arrange

    const chooseUsCard = screen.getByAltText("calc");
    //Act
    //Assert
    expect(chooseUsCard).toBeInTheDocument();
  });

  it('renders "Your Success is Our Success" card', () => {
    render(<AboutUs />);
    //Arrange
    const successCard = screen.getByAltText("success");
    //Act
    //Assert
    expect(successCard).toBeInTheDocument();
  });
});
