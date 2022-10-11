import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Carousel } from './carousel'

export default {
    title: 'Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
    return (
        <Carousel {...args}>
            <div>
                slide-1
            </div>
            <div>
                slide-2
            </div>
            <div>
                slide-3
            </div>
        </Carousel>
    )
}

export const Primary = Template.bind({});
Primary.args = {

};