import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Multiselect } from './multiselect'
import { useState } from 'react'
import { optionsType } from 'stories/select'

export default {
  title: 'Multiselect',
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>

const Template: ComponentStory<typeof Multiselect<number>> = (args) => {
  const [select, setSelect] = useState<optionsType<number>[]>([])

  return <Multiselect {...args} onChange={setSelect} currentOptions={select} />
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Multiselect',
  options: [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Fourth', value: 4 },
    { label: 'Fifth', value: 5 },
    { label: 'Sixth', value: 6 },
  ],
}
