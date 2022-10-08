import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { checkAnswer } from './App';


it('Sould have 4 different h1 values that changes when you click the right answer', () => {
  render(<App />)
  const quizTitle = document.querySelector('h1')
  expect(quizTitle).toHaveTextContent('Hvor mange timer er det i en dag?')
  fireEvent.click(screen.getByText('24'))
  expect(quizTitle).toHaveTextContent('Hva heter den magiske hunden som biter av folk øret?')
  fireEvent.click(screen.getByText('Elton Jhon'))
  expect(quizTitle).toHaveTextContent('Hva er Velkommen på Polsk?')
  fireEvent.click(screen.getByText('Witaj'))
  expect(quizTitle).toHaveTextContent('Hvorfor kan jeg ikke danse?')
})
it('Helper div should be hidden by default', () => {
  render(<App />)
  const element = document.getElementById('helper').style.display;    
  expect(element).toBe('none');
})
it('renders the page', () => {
  render(<App />);
});
it('should render at least 4 buttons', () => {
  render(<App />)
  const element = document.querySelectorAll('button');
  // expect(element).toBeInTheDocument();
  expect(element).toHaveLength(4);
});


