import React, { useState } from 'react'

const [state, setState] = useState()

const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years:'',
});

const handleInputChange = (event) =>
    setUserValues({ 
        ...userValues, 
        [event.target.name]: event.target.value,
        [event.target.interest]: event.target.value,
        [event.target.years]: event.target.value,
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
                    pnChange={handleInputChange}
                />
                </div>
                <div>
                    <label>Interest:</label>
                    <input
                        type='text'
                        name='interest'
                        placeholder='Interest'
                        value={userValues.interest}
                        pnChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Years:</label>
                    <input
                        type='text'
                        name='years'
                        placeholder='Loan term'
                        value={userValues.years}
                        pnChange={handleInputChange}
                    />
                </div>
            </div>
        </form>
        </div>
   )
}

export default Calculator;