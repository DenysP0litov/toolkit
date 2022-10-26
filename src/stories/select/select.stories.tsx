import { ComponentMeta, ComponentStory } from '@storybook/react'
import { optionsType, Select } from './select'
import { useState } from 'react'

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [select, setSelect] 
        = useState<optionsType<number> | undefined>(undefined)

    return (
        <Select {...args} onChange={setSelect} currentOption={select}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    title: 'Select',
    options: [
        {label:'First', value: 1}, 
        {label:'Second', value: 2}, 
        {label:'Third', value: 3}, 
        {label:'Fourth', value: 4},
        {label:'Fifth', value: 5}, 
        {label:'Sixth', value: 6}
    ],
};