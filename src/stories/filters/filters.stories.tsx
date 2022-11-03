import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExpandableSidebar } from './components/expandable-sidebar'
import { useState } from 'react'
import './styles'
import { FiltersForm } from './components/filters-form'
import { FiltersType } from './types'

export default {
  title: 'Filters',
  component: ExpandableSidebar,
} as ComponentMeta<typeof ExpandableSidebar>

const Template: ComponentStory<typeof ExpandableSidebar> = (args) => {
  const [sidebarStatus, setSidebar] = useState(false)
  const [filters, setFilters] = useState<FiltersType>({
    title: '',
    description: '',
    price: [0, 1000],
    quantity: [0, 100],
    jewelryTypeId: undefined,
    labelsIds: [],
  })

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
        <FiltersForm
          onSubmit={() => setSidebar(false)}
          setFilters={setFilters}
          filters={filters}
        />
      </ExpandableSidebar>
    </main>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
