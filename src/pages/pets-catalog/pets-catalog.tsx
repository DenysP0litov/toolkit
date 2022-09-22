import { Tabs } from "components/tabs"
import { useState } from "react"

export const PetsCatalog = () => {
    const petKinds = [
        { label: 'Cats', value: 'cats' },
        { label: 'Dogs', value: 'dogs' },
        { label: 'Hamsters', value: 'hamsters' },
    ]

    const sortTypes = [
        { label: 'Sort by name', value: 'name' },
        { label: 'Sort by price', value: 'price' },
        { label: 'Sort by age', value: 'age' },
    ]

    const pages = [
        { label: 'First page', value: 1 },
        { label: 'Second page', value: 2 },
        { label: 'Third page', value: 3 },
    ]

    const [ petKind, setPetKind ] = useState(petKinds[0].value);
    const [ sortType, setSortType ] = useState(sortTypes[0].value);
    const [ page, setPage ] = useState(pages[0].value);

    return (
        <>
            <Tabs currentTab={petKind} tabs={petKinds} onChange={setPetKind}/>
            <Tabs currentTab={sortType} tabs={sortTypes} onChange={setSortType}/>
            <Tabs currentTab={page} tabs={pages} onChange={setPage}/>
        </>
    )
}