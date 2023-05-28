//json-server --watch database.json --port 3000

const getData = async(url) => {
    const response = await fetch(url)
    return await response.json()
}

const addData = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    return await response.json()
}

const deleteData = async(url) => {
    const response = await fetch(url, {
        method: 'DELETE'
    })
    return await response.json()
}