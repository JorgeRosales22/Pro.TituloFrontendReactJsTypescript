import axios from "axios";

export const getUSD = async () => {
    try {
        const response = await axios.get(`http://apilayer.net/api/live?access_key=42f7dec9761ddb8809d6587c6eee8283&currencies=CLP&source=USD&format=1`, {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data.quotes.USDCLP;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};
export const getEUR = async () => {
    try {
        const response = await axios.get(`http://apilayer.net/api/live?access_key=42f7dec9761ddb8809d6587c6eee8283&currencies=CLP&source=EUR&format=1`, {
            headers: {
                'Accept': 'application/json',
            }
        });
        
        return response.data.quotes.EURCLP;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};
export const getCNY = async () => {
    try {
        const response = await axios.get(`http://apilayer.net/api/live?access_key=42f7dec9761ddb8809d6587c6eee8283&currencies=CLP&source=CNY&format=1`, {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data.quotes.CNYCLP;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};
export const getGBP = async () => {
    try {
        const response = await axios.get(`http://apilayer.net/api/live?access_key=42f7dec9761ddb8809d6587c6eee8283&currencies=CLP&source=GBP&format=1`, {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data.quotes.GBPCLP;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};







// key 75c6fde0d48ef29a72a37a0717bfbd86
