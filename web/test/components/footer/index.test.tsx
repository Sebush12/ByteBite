import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '@/components/navigation/footer'

describe('Footer', () => {
  
  it('should render a copyright', () => {
    render(<Footer />)
    
    // Arrange
    const copyrightText = '© 2023 ByteBite Tracker. No rights reserved'
    const copyright = screen.getByTestId('copyright');
    
    // Act
    // Assert
    expect(copyright).toHaveTextContent(copyrightText);
  });

  it('should contain a Home link', () => {
    render(<Footer />)

    // Arrange 
    const name = 'Home';
    const link= screen.getByTestId('home-link');

    // Act
    // Assert
    expect(link).toHaveTextContent(name);
    expect(link).toHaveAttribute("href", "/");
  });

  it('should contain a Contact Us link', () => {
    render(<Footer />)

    // Arrange 
    const name = 'Contact Us';
    const link= screen.getByTestId('contact-link');

    // Act
    // Assert
    expect(link).toHaveTextContent(name);
    expect(link).toHaveAttribute("href", "/contact");
  });

  it('should contain an About link', () => {
    render(<Footer />)

    // Arrange 
    const name = 'About';
    const link= screen.getByTestId('about-link');

    // Act
    // Assert
    expect(link).toHaveTextContent(name);
    expect(link).toHaveAttribute("href", "/about");
  });
});
