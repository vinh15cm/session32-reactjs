// EmailForm.js
import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu email ở đây
        console.log('Email submitted:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmailForm;
