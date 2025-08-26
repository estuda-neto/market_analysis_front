import { render } from '@testing-library/react';
import { ThemeInitializer } from '../components/ThemeInitializer';

describe('ThemeInitializer', () => {

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('adiciona a classe dark ao html se localStorage tiver "dark"', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeInitializer />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('não adiciona classe dark se localStorage estiver vazio', () => {
    render(<ThemeInitializer />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('não adiciona classe dark se localStorage tiver "light"', () => {
    localStorage.setItem('theme', 'light');
    render(<ThemeInitializer />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
