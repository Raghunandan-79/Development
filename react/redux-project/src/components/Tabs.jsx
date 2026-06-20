import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    return (
        <div>
            <Tab />
        </div>
    )
}

function Tab() {
    const tabs = ['photos', 'videos']

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <>
            <div className='flex justify-center gap-10 p-10'>
                {tabs.map(function (elem, idx) {
                    return <button
                        className={`${(activeTab == elem ? 'bg-blue-700' : 'bg-emerald-600')} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                })}
            </div>
        </>
    )
}

export default Tabs