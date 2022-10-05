import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from './pagination'
import { useState } from 'react'

export default {
    title: 'Pagination',
    component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
    const [page, setPage] = useState(1)

    return (
        <Pagination {...args} onChange={setPage} currentPage={page}/>
    )
}

export const Primary = Template.bind({});
Primary.args = {
    pagesCount: 10,
    siblingsCount: 1,
    borderCount: 1,
};