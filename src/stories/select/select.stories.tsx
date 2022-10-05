import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './select'
import { useState } from 'react'

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [select, setSelect] = useState('')

    return (
        <Select {...args} onChange={setSelect} currentValue={select}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    title: 'Select',
    values: ['First', 'Second'],
};