const baseUrl = "http://localhost:3030/jsonstore/jobs/"

export const create = async (jobData) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
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
        const response = await fetch(baseUrl);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    };
};

export const getOne = async (jobId) => {
    try {
        const response = await fetch(`${baseUrl}${jobId}`)
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err)
    };
};