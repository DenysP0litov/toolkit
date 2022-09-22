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

    const [ petKind, setPetKind ] = useState(petKinds[0].value);
    const [ sortType, setSortType ] = useState(sortTypes[0].value);

    return (
        <>
            <Tabs currentTab={petKind} tabs={petKinds} onChange={setPetKind}/>
            <Tabs currentTab={sortType} tabs={sortTypes} onChange={setSortType}/>
        </>

    )
}