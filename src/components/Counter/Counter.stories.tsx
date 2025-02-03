import { Counter } from "./Counter";
import {Meta, StoryObj,} from '@storybook/react'


const meta: Meta<typeof Counter> = {
	title: 'Components/Counter',
	component: Counter,
	argTypes:{
		size: {
			control: {type: 'select'},
			options: [8,12,16,20,24],
		},
		baseColor:{
			control: {type: 'radio'},
			options: ['primary', 'secondary'],
		},
		pulse: {control: 'boolean'},
		stroke: {control: 'boolean'},
		quantity: {control: 'text'},
	},
}

export default meta
type Story = StoryObj<typeof Counter>


export const Default: Story = {
	args:{
		size: 16,
		quantity: 5,
		baseColor: "primary",
	},
} 

export const SmallPrimaryStory: Story = {
	args:{
		size: 8,
		quantity: 1,
		baseColor: "primary",
		pulse: true,
	},
}

export const Secondary: Story = {
	args:{
		size:12,
		quantity: 10,
		baseColor: 'secondary',
	},
}

export const LargeWithStroke: Story = {
	args: {
	  size: 24,
	  quantity: 99,
	  baseColor: 'primary',
	  stroke: true,
	},
  };
  
  export const DoubleDigits: Story = {
	args: {
	  size: 20,
	  quantity: 42,
	  baseColor: 'secondary',
	  pulse: true,
	},
  };

export const MaxValue: Story = {
	args: {
	  size: 24,
	  quantity: 1000,
	  baseColor: 'primary',
	  pulse: true,
	  stroke: true,
	},
};


export const StringQuntity: Story = {
	args: {
	  size: 24,
	  quantity: '12345',
	  baseColor: 'primary',
	  pulse: true,
	  stroke: true,
	},
};
