const baseUrl = "http://localhost:3030/data/jobs/";

export const create = async (jobData) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Authorization": token,
            },
            body: JSON.stringify(jobData)
        })
        const result = await response.json()

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const getJobList = async () => {
    try {
        const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const getOne = async (jobId) => {
    try {
        const response = await fetch(`${baseUrl}${jobId}`);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const getLatest = async () => {
    try {
        const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=4`);
        const result = await response.json();

        return result;
    } catch(err) {
        console.log(err);
    };
};

export const edit = async (jobId, jobData) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}${jobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(jobData),
        })

        const result = await response.json();

        return result;

    } catch (err) {
        console.log(err)
    }
};

export const remove = async (jobId) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}${jobId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            }
        });

        return response;

    } catch(err) {
        console.log(err);
    };
};