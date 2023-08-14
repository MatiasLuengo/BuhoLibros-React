import { useState } from 'react'

export default function useFilterState(state) {
    const [filterState, setFilterState] = useState(state);
    const changeFilter = (event) =>{
        setFilterState(event.target.value);
    }
    return {filterState, changeFilter};
}