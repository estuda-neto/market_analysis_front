import { ToggleButtonTheme } from '@/components/ToggleButtonTheme';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ToggleButtonTheme', () => {

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('deve renderizar o botão na tela', () => {
    render(<ToggleButtonTheme />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('deve alternar o tema dark/light ao clicar', () => {
    render(<ToggleButtonTheme />);
    
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
