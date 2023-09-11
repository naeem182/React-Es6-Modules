import React from 'react'
import Sunglass from '../Sunglass'
import { add, dividefirstnumbysecoundnum as divide, mul } from '../utils/Calculate';

const Watch = () => {
    const first = 10;
    const secound = 5;
    const sum = add(first, secound);
    const mul = mul(first, secound);
    const divide = divide(first, secound)
    return (
        <div>
            <Sunglass></Sunglass>

        </div>
    )
}

export default Watch
