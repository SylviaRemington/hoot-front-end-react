const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;

/*
If you completed the setup steps, your .env should contain 
a VITE_BACK_END_SERVER_URL environment variable set to 
http://localhost:3000. When running our app locally, the 
BASE_URL will read as http://localhost:3000/hoots.
*/

// src/services/hootService.js

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export {
    index,
};

/*
If you look at the controllers/hoots.js file in your back-end application,
 you’ll notice that all of our routes for hoots are protected by the verifyToken 
 middleware.

As a result, all of our hoot service functions will require this Authorization header.
*/