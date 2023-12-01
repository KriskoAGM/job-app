const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const result = await response.json();

        return result;

    } catch (err) {
        console.log(err);
    };
};

export const register = async (email, username, password) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
            }),
        });

        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const logout = async () => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': token,
            },
        })
    } catch(err) {
        console.log(err);
    }
};