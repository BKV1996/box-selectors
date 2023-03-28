import React, { useState, useEffect } from 'react'
import Child from './Child'
import './Child.css';
import {
    Navbar,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


const arr = [];
const Parent = () => {
    const [array, setArray] = useState();
    const [array1, setArray1] = useState(arr);
    const updateState = (e) => {
        // console.log(e.target.value);

        let data = [];
        data.push(e.target.value);
        setArray(data);
        // console.log(data);
        for (let i = 1; i <= data; i++) {
            arr.push(i);
            setArray1(arr);
            // console.log(array1)
        }
        // console.log(array);
    }
    useEffect(() => {
        array1.splice(0, array);

    }, [array])
    // console.log(array1)

    let item = array1.map(() => {
        return (<Child />)
    })

    return (
        <>
        
            <Navbar className='box3'>
                <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                        Select to see Your boxes
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={1}>1</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={2}>2</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={3}>3</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={4}>4</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={5}>5</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={6}>6</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={7}>7</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={8}>8</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={9}>9</DropdownItem>
                        <DropdownItem onClick={(e) => updateState(e)} name="array" value={10}>10</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar>


            <div className='d-flex justify-content-evenly' style={{ marginTop: "250px" }}>
                {item}
            </div>

        </>
    )
}

export default Parent
