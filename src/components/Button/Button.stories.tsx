import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";





const meta: Meta<typeof Button> ={
	title: 'Components/Button',
	component: Button,
	argTypes:{
		style: {
			control: {type: 'select'},
			options: ['primary', 'secondary'],
		},
		size: {
			control: {type: 'select'},
			options: [28 | 36 | 56]
		},
		state:{
			control: {type: 'select'},
			options: ['enabled', 'pressed', 'loading', 'disabled']
		},
		counter: { type: 'boolean'},
		focused: { type: 'boolean'},

	}
}


export default meta
type Story = StoryObj<typeof Button>


export const Default: Story = {
	args:{
		style: 'secondary',
		size: 36,
		state: 'enabled',
		counter: false,
		children: 'Что сделать'
	}
}
export const PrimaryButton: Story = {
	args:{
		style: 'primary',
		size: 36,
		state: 'enabled',
		counter: true,
		children: 'Что сделать'
	}
}
export const LoadingButton: Story = {
	args:{
		style: 'primary',
		size: 28,
		state: 'loading',
		counter: true,
		children: 'Что сделать'
	}
}

export const PressedButton: Story = {
	args:{
		style: 'primary',
		size: 56,
		state: 'pressed',
		counter: true,
		children: 'Что сделать'
	}
}

export const SecondaryLoading: Story = {
	args:{
		style: 'secondary',
		size: 28,
		state: 'loading',
		counter: true,
		children: 'Что сделать'
	}
}