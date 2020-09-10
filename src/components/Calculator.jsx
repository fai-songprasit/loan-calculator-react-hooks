import React, { useState } from 'react'

const [state, setState] = useState()

const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years:'',
});

const Calculator = () => {
   return (
       <div>
            <h1>Loan Calculator</h1>
        <form>
            <div>
                <div>
                <label>Amount:</label>
                <input
                    type='text'
                    name='amount'
                    placeholder='Loan amount'
                    value={userValues.amount}
                />
                </div>
                <div>
                    <label>Interest:</label>
                    <input
                        type='text'
                        name='interest'
                        placeholder='Interest'
                    />
                </div>
            </div>
        </form>
        </div>
   )
}

export default Calculator;