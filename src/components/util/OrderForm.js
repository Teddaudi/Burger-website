import React, { useState } from 'react';

function OrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, phone, orders)
        try {
            const response = await fetch('http://localhost:5000/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, orders }),
            });
            if (response.status === 201) {
                const result = await response.json();
                alert(result.message); // Show a success message
                setName('');
                setPhone('');
                setOrders('');
            } else {
                const errorResult = await response.json();
                alert(errorResult.error); // Show an error message
            }
        } catch (error) {
            console.error(error);
            alert('Internal Server Error');
        }
    };
    return (
        <div>
            <h2>Submit an Order</h2>
            <form onSubmit={handleSubmit} method='POST'>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Orders:</label>
                    <textarea value={orders} onChange={(e) => setOrders(e.target.value)} />
                </div>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default OrderForm;
