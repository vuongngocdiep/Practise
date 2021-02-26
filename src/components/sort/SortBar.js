import React from 'react'
import './SortBar.css'
import { Select } from 'antd';

const { Option } = Select;

function SortBar(props) {
    const handleChange = (value)=>{
        props.onReceive(value)
    }
    return (
        <div>
            <Select className="select-sort" defaultValue="none" onChange={handleChange}>
                <Option value="none">Sort results by...</Option>
                <Option value="lowest_number">Lowest Number (First)</Option>
                <Option value="highest_number">Highest Number (First)</Option>
                <Option value="a_z">A-Z</Option>
                <Option value="z_a">Z-A</Option>
            </Select>
        </div>
    )
}

export default SortBar
