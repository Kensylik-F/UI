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
	style = 'secondary',
	size = 36,
	state = 'enabled',
	counter = false,
	focused = false,
	onClick,
	children,
}) => {

	const buttonStyle = [
		'btn-base',
		`btn-${style}`,
		`btn-size-${size}`,
		`btn-state-${state}`,
		focused ? 'btn-focused' : ''
	].join(' ')

	return (
		<button 
			className={buttonStyle}
			onClick={onClick}
			tabIndex={state == 'loading' ? -1 : 0}
			disabled={ state === 'disabled'}>
			{state === 'loading' ? (
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