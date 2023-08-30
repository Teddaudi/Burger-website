import { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState('2');
    const [msisdn, setMsisdn] = useState('0707894405');
    const [accountNo, setAccountNo] = useState('200');

    const handleSubmit = async () => {
        const url = 'https://tinypesa.com/api/v1/express/initialize';
        const requestBody = new URLSearchParams({
            amount: amount,
            msisdn: msisdn,
            account_no: accountNo,
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Apikey: 'CERkYjSdqXj', // Replace with your API key
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestBody,
            });

            const data = await response.json();
            console.log('API response:', data);
            // Handle the API response here
        } catch (error) {
            console.error('API request error:', error);
            // Handle errors here
        }
    };

    return (
        <div>
            <label htmlFor="amount">Amount:</label>
            <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            /><br /><br />

            <label htmlFor="msisdn">MSISDN:</label>
            <input
                type="text"
                id="msisdn"
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
            /><br /><br />

            <label htmlFor="account_no">Account No:</label>
            <input
                type="text"
                id="account_no"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
            /><br /><br />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Payment;
