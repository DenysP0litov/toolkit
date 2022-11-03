import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExpandableSidebar } from './components/expandable-sidebar'
import { useState } from 'react'
import './styles'
import { FiltersForm } from './components/filters-form'

export default {
  title: 'Filters',
  component: ExpandableSidebar,
} as ComponentMeta<typeof ExpandableSidebar>

const Template: ComponentStory<typeof ExpandableSidebar> = (args) => {
  const [sidebarStatus, setSidebar] = useState(false)

  return (
    <main>
      <button className="sidebar-story-button" onClick={() => setSidebar(true)}>
        Open sidebar
      </button>

      <ExpandableSidebar
        onChange={setSidebar}
        status={sidebarStatus}
        title="Filters"
      >
        <FiltersForm onSubmit={() => setSidebar(false)} />
      </ExpandableSidebar>
    </main>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
