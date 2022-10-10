import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Carousel } from './carousel'

export default {
    title: 'Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
    return (
        <Carousel {...args}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    slides: ['slide-1', 'slide-2', 'slide-3', 'slide-4']
};