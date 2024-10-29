import { useState } from 'react';

const useFetchPincode = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchPincodeData = async (pincode) => {
        if (!pincode) {
            setError('Please enter a pincode.');
            return;
        }

        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const result = await response.json();

            if (result[0].Status === "Success") {
                setData(result[0].PostOffice);
                setError('');
            } else {
                setData([]);
                setError('Invalid pincode. Please try again.');
            }
        } catch (err) {
            setData([]);
            setError('Error fetching data. Please try again later.');
        }
    };

    return { data, error, fetchPincodeData };
};

export default useFetchPincode;