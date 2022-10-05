import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Slider } from './slider'
import { useState } from 'react'

export default {
    title: 'Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
    const [value, setValue] = useState(0)

    return (
        <Slider {...args} onChange={setValue} value={value}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    checkPoints: 10
};