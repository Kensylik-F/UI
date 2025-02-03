import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from "./Button";





describe('Button', () =>{
	test('enabled button with primary style and size 36', () => {
		render(<Button style="primary" size={36} state="enabled">Click Me</Button>);
		const button = screen.getByRole('button', { name: /Click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('btn-primary');
		expect(button).toHaveClass('btn-size-36');
		expect(button).not.toBeDisabled();
	});
	test('disabled button', () => {
		render(<Button style="secondary" size={28} state="disabled">Disabled</Button>);
		const button = screen.getByRole('button', { name: /disabled/i });
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
		expect(button).toHaveClass('btn-secondary');
	});
	test('renders pressed button and triggers onClick', () => {
		const handleClick = jest.fn();
		render(<Button style="secondary" size={36} state="pressed" onClick={handleClick}>Pressed</Button>);
		
		const button = screen.getByRole('button', { name: /pressed/i });
		expect(button).toHaveClass('btn-state-pressed');
	
		// Проверяем клик
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	  });
	  test('renders button with counter', () => {
		render(<Button style="primary" size={36} state="enabled" counter={true}>Counter</Button>);
		
		const button = screen.getByRole('button', { name: /counter/i });
		expect(button).toBeInTheDocument();
		
		// Проверяем наличие счетчика
		const counter = screen.getByText(/3/i); // Предполагаем, что счетчик всегда равен 3
		expect(counter).toBeInTheDocument();
	  });
	  test('checks hover effect is disabled in loading state', () => {
		render(<Button style="primary" size={56} state="loading">Loading</Button>);
		
		const button = screen.getByRole('button');
		
		fireEvent.mouseOver(button);
		const styles = window.getComputedStyle(button);
		
		expect(styles.transform).not.toBe('scale(1.05)');
	  });
	  test('renders loading button and is not clickable', () => {
		const handleClick = jest.fn();
		render(
		  <Button 
			style="primary" 
			size={56} 
			state="loading" 
			onClick={handleClick}
		  >
			Loading
		  </Button>
		);
	  
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled(); 
		const spinner = button.querySelector('.loading-spinner');
  		expect(spinner).toBeInTheDocument(); 
	  });
	

	  test('does not apply hover effect in loading state', () => {
		render(<Button style="primary" size={56} state="loading">Loading</Button>);
		
		const button = screen.getByRole('button');
		fireEvent.mouseOver(button);
		const styles = window.getComputedStyle(button);
		expect(styles.transform).not.toBe('scale(1.05)');
	  });

	  test('does not show counter when counter is false', () => {
		render(<Button style="primary" size={36} state="enabled" counter={false}>No Counter</Button>);
		
		const button = screen.getByRole('button', { name: /no counter/i });
		expect(button).toBeInTheDocument();
		
		
		const counter = screen.queryByText(/3/i);
		expect(counter).not.toBeInTheDocument(); 
	  }); 
	  
	  test('focus state adds blue outline', async () => {
		render(<Button style="primary" size={36}>Click me</Button>);
		
		const button = screen.getByRole('button');
		fireEvent.focus(button); 
	
		expect(button).toHaveClass('btn-focused'); 
	  });

	  test('button receives focus when tabbed to', () => {
		render(<Button style="primary" size={36} state="enabled">Tab Me</Button>);
		
		const button = screen.getByRole('button', { name: /tab me/i });
		
		
		button.focus(); 
		expect(button).toHaveFocus(); 
	  });
	  
})