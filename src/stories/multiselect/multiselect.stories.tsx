import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Multiselect } from './multiselect'
import { useState } from 'react'

export default {
    title: 'Multiselect',
    component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => {
    const [select, setSelect] = useState<string[]>([])

    return (
        <Multiselect {...args} onChange={setSelect} currentValues={select}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    title: 'Multiselect',
    values: ['First', 'Second', 'Third', 'Hello', 'World', 'Not so long name'],
};