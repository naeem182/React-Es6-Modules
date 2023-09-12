
// import Sunglass from '../Sunglass'
// import { add, dividefirstnumbysecoundnum as divide, mul } from '../utils/Calculate';

const Watch = ({ watch }) => {
    // const first = 10;
    // const secound = 5;
    // const sum = add(first, secound);
    // const mull = mul(first, secound);
    // const dividee = divide(first, secound)
    // const sunglass = [
    //     { name: 'John', price: 30 },
    //     { name: 'Alice', price: 25 },
    //     { name: 'Bob', price: 35 },

    //     { name: 'Emma', price: 27 },
    // ];


    const { name, price } = watch;


    return (
        <div>
            <h3>name:{name} </h3>

            <h3>Price:{price}</h3>

        </div>
    )
}

export default Watch
