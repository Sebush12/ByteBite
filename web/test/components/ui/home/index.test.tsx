import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from '@/components/ui/home'

describe('Home', () => {
  
  it('should render a picCard', () => {
    render(<Home />)
    
    // Arrange
    const picCard1 = screen.getByAltText("nutrition");
    
    // Act
    // Assert
    expect(picCard1).toBeInTheDocument();
  });

  it('should render a picCard', () => {
    render(<Home />)
    
    // Arrange
    const picCard2 = screen.getByAltText("calc");
    
    // Act
    // Assert
    expect(picCard2).toBeInTheDocument();
  });

  it('should render a picCard', () => {
    render(<Home />)
    
    // Arrange
    const picCard3 = screen.getByAltText("activity");
    
    // Act
    // Assert
    expect(picCard3).toBeInTheDocument();
  });

  it('should render a button', () => {
    render(<Home />)
    
    // Arrange
    const button = screen.getByTestId("join-button");
    
    // Act
    // Assert
    expect(button).toBeInTheDocument();
  });


});
