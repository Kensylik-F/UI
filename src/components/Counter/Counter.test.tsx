import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { Counter } from "./Counter"






describe('Counter', () =>{
	test('render base value',async ()=>{
		render(<Counter size={16} quantity={5} style='primary'/>)
		const counter = await screen.findByText('5');
		expect(counter).toBeInTheDocument(); 
		const container = counter.closest('.counter');
  		expect(container).toHaveClass('size-16');
	})
	test('max value',async () =>{
		render(<Counter size={24} quantity={1000} style='primary'/>)
		const counter = await screen.findByText('99+');
		expect(counter).toBeInTheDocument();
	})
	test('string value',async () =>{
		render(<Counter size={24} quantity={'abcdef'} style='primary'/>)
		const counter = await  screen.findByText('abc');
		expect(counter).toBeInTheDocument();
	})
	test('not display quantity',async () =>{		
		render(<Counter size={8} quantity={5} pulse={false} />);
    	const counterValue8 = screen.queryByText(/5/i);
    	expect(counterValue8).not.toBeInTheDocument(); 

		render(<Counter size={12} quantity={5} pulse={false} />);
    	const counterValue12 = screen.queryByText(/5/i);
    	expect(counterValue12).not.toBeInTheDocument(); 
	})

	test('not show animation', async () => {
		const { container } = render(<Counter size={8} quantity={5} pulse={false} />);
		const pulseElements = container.getElementsByClassName('pulse');
		expect(pulseElements.length).toBe(0);
	});
	test('animation show at 12',async()=>{
		const { container } = render(<Counter size={12} quantity={5} pulse={true} />);
    	const pulseElements12 = container.getElementsByClassName('pulse');
    	expect(pulseElements12.length).toBeGreaterThan(0);
		const counterValuePulse12 = screen.queryByText(/5/i);
    	expect(counterValuePulse12).not.toBeInTheDocument(); 
		
	})
	test('animation show at 8',async()=>{
		const { container } = render(<Counter size={8} quantity={5} pulse={true} />);
    	const pulseElements8 = container.getElementsByClassName('pulse');
    	expect(pulseElements8.length).toBeGreaterThan(0);
		const counterValuePulse8 = screen.queryByText(/5/i);
    	expect(counterValuePulse8).not.toBeInTheDocument(); 
		
	})
	test('number display at size >12 and lack of animation  (24)',async()=>{
		const { container } = render(<Counter size={24} quantity={24} pulse={true} />);
		const counterValuePulse =await screen.findByText('24');
    	expect(counterValuePulse).toBeInTheDocument(); 
    	const pulseElements = container.getElementsByClassName('pulse');
    	expect(pulseElements.length).toBe(0);
	})
	test('number display at size >12 and lack of animation  (20)',async()=>{
		const { container } = render(<Counter size={20} quantity={20} pulse={true} />);
		const counterValuePulse =await screen.findByText('20');
    	expect(counterValuePulse).toBeInTheDocument(); 
    	const pulseElements = container.getElementsByClassName('pulse');
    	expect(pulseElements.length).toBe(0);
	})
	test('number display at size >12 and lack of animation  (16)',async()=>{
		const { container } = render(<Counter size={16} quantity={16} pulse={true} />);
		const counterValuePulse =await screen.findByText('16');
    	expect(counterValuePulse).toBeInTheDocument(); 
    	const pulseElements = container.getElementsByClassName('pulse');
    	expect(pulseElements.length).toBe(0);

		
	})
	
})