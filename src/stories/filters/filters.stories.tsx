import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExpandableSidebar } from './components/expandable-sidebar'
import { useState } from 'react'
import './styles'
import { FiltersForm } from './components/filters-form'
import { FiltersType } from './types'
import { attributesList } from './constants'
import { createInitialState } from './utils'

export default {
  title: 'Filters',
  component: ExpandableSidebar,
} as ComponentMeta<typeof ExpandableSidebar>

const Template: ComponentStory<typeof ExpandableSidebar> = (args) => {
  const [sidebarStatus, setSidebar] = useState(false)
  const [filters, setFilters] = useState<FiltersType>(
    createInitialState(attributesList)
  )

  const data: Array<{ attribute_id: number; value: keyof FiltersType }> = []

  for (let k in filters) {
    const key = k as keyof FiltersType
    data.push({
      attribute_id: attributesList.find((attribute) => attribute.name === key)!
        ._id,
      value: filters[key] as keyof FiltersType,
    })
  }

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
