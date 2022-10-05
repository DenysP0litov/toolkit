import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tabs } from './tabs'
import { useState } from 'react'

export default {
    title: 'Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs<string>> = (args) => {
    const [tab, setTab] = useState('')

    return (
        <Tabs {...args} onChange={setTab} currentTab={tab}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {label: 'First', value: 'first'},
        {label: 'Second', value: 'second'}
    ]
};