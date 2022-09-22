import { Tabs } from './components/tabs'

const initialData = [
  { label: 'First tab', value: 'tab1' },
  { label: 'Second tab', value: 'tab2' },
  { label: 'Third tab', value: 'tab3' },
]

function App() {
  return <Tabs tabs={initialData} />
}

export default App
