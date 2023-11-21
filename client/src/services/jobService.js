const baseUrl = "http://localhost:3030/jsonstore/jobs/"

const create = async (jobData) => {
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
    }
}