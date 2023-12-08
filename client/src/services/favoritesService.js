const baseUrl = "http://localhost:3030/data/likes/";


export const addFavorite = async (jobData) => {
    try {
        // Extract the existing job ID
        const oldId = jobData._id;

        // Add the new property to the jobData object
        jobData.old_id = oldId;

        const token = localStorage.getItem('accessToken');
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(jobData)
        });

        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const removeFavorite = async (jobId) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}${jobId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            }
        });

        const result = await response.json()

        return result;
    } catch (err) {
        console.log(err)
    };
};

export const getAllFavorites = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};