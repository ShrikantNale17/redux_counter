import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from './counterSlice';

function Counter() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='py-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(decrement(incrementBy))}>-</button>
                <button className="btn btn-dark px-5" disabled>{counter}</button>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(increment(incrementBy))}>+</button>
                <button className="btn btn-outline-secondary" onClick={() => counter % 2 !== 0 && dispatch(increment(incrementBy))}>Increment if odd</button>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(incrementAsync(incrementBy))}>IncrementAsync</button>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <label htmlFor="incrementBy" className="col-sm-3 col-form-label">Amount:</label>
                <div className="col-sm-3 px-0">
                    <input type="number" className="form-control" id="incrementBy" value={incrementBy} onChange={(e) => setIncrementBy(Number(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default Counter