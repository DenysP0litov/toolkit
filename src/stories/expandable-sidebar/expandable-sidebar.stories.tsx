import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExpandableSidebar } from './expandable-sidebar'
import { useState } from 'react'
import './expandable-sidebar.stories.scss'

export default {
  title: 'Expandable Sidebar',
  component: ExpandableSidebar,
} as ComponentMeta<typeof ExpandableSidebar>

const Template: ComponentStory<typeof ExpandableSidebar> = (args) => {
  const [sidebarStatus, setSidebar] = useState(false)

  return (
    <main>
      <button className='sidebar-story-button' onClick={() => setSidebar(true)}>Open sidebar</button>
      <ExpandableSidebar onChange={setSidebar} status={sidebarStatus}>
        <h1>Hello world!</h1>
        <button className='sidebar-story-button' onClick={() => setSidebar(false)}>Bye!</button>
      </ExpandableSidebar>
    </main>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
