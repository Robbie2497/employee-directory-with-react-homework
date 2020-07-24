import React, {useState} from 'react';
// import onClickOutside from 'react-onclickoutside';

 function StateDropDown({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    StateDropDown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if(!selection.some(current => current.value === item.value)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAferRemoval = selection;
            selectionAferRemoval = selectionAferRemoval.filter(
                current => current.value !== item.value
            );
            setSelection([...selectionAferRemoval])
        }
    }

    function isItemInSelection (item) {
        if (selection.some(current => current.value === item.value)) {
            return true;
        }
        return false;
    }

    return (
        <div tabIndex={0} 
        role="button" 
        onKeyPress={() => toggle(!open)} 
        onClick={() => toggle(!open)}
        >
            <div>
                <p className="btn btn-secondary dropdown-toggle">{open ? 'Close' : 'Filter by location'}</p>
            </div>
            {open && (
                <ul className="scroll list-group" >
                    {items.map(item => (
                        <li key = {item.value} className="list-group-item">
                            <button type="button" className="btn-sm listItems" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{isItemInSelection(item) && ' Selected'}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
}
// const clickOutsideConfig = {
//     handleClickOutside: () => StateDropDown.handleClickOutside,
// };

export default StateDropDown;
// onClickOutside(StateDropDown, clickOutsideConfig);