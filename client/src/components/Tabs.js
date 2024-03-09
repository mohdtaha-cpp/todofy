
import { TABS } from "../redux/actions/type";

import { useDispatch } from 'react-redux';

import { toggleTab } from "../redux/actions";

/**
 * The component creates the group of tabs denoting the
 * 'All tasks', 'Active Tasks', 'Completed Tasks'.
 * 
 * @param {currentTab} String -> Active tab 
 * @returns the group of tabs
 */
const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        <div className="flex justify-center">
            {
                TABS.map(tab => (
                    <button
                        className={`${tab === currentTab ? 'button selected' : 'button'} hover:bg-slate-100`}
                        onClick={() => dispatch(toggleTab(tab))}
                    >
                        {tab}
                    </button>
                ))
            }
        </div>
    )
}

export default Tabs;