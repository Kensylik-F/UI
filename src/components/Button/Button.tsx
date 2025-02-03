import { useState } from "react";
import { Counter } from "../Counter/Counter";
import './Button.scss'




interface IButton {
	style?: 'primary' | 'secondary';
	size?: 28 | 36 | 56;
	state?: 'enabled' | 'pressed' | 'loading' | 'disabled'
	counter?: boolean;
	focused?: boolean;
	children?: React.ReactNode
	onClick?: () => void
}

export const Button: React.FC<IButton> = ({
	style = 'primary',
	size = 36,
	state = 'enabled',
	counter = false,
	focused = true,
	onClick,
	children,
}) => {
	const [isFocused, setIsFocused] = useState(focused);
	const [currentState, setCurrentState] = useState(state);

	const buttonStyle = [
		'btn-base',
		`btn-${style}`,
		`btn-size-${size}`,
		`btn-state-${currentState}`,
		(focused || isFocused) ? 'btn-focused' : '',
	].join(' ')

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (currentState === 'loading' || currentState === 'disabled') {
		  event.preventDefault();
		  return; 
		}
		setCurrentState('loading')
		if(onClick) {
			onClick(); 
			
		}
	  };
	  
	  const handleFocus = () => {
		setIsFocused(true);
	  };
	
	  const handleBlur = () => {
		setIsFocused(false);
	  };
	
	return (
		<button 
			className={buttonStyle}
			onClick={handleClick}
			onFocus={handleFocus}
			onBlur={handleBlur}
			tabIndex={state == 'loading' ? -1 : 0}
			disabled={ state === 'disabled'}
			>
			{currentState === 'loading' ? (
          		<div className="loading-spinner"></div> 
        	) : (
          		<>
            		<div className="label">{children || 'label'}</div>
            		{counter && (
              			<Counter
                			stroke={true}
                			quantity={3}
                			pulse={true}
                			size={16}
                			baseColor={style == 'secondary' ? 'secondary' : 'primary'}
              			/>
            		)}
          		</>
        	)}
		</button>
	)
}