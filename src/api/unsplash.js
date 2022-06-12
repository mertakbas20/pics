import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID KSy6eM4iRbWqvgXnHQYZ3mPBrRhK5NH-CFdlsmEDNYs'
    }
});