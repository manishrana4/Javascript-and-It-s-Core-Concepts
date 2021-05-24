function getData() {

    let data = fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            console.log("data promise fetch then", data);
            return data;
        }
        );
    console.log("data promise:", data)
}

getData();

async function getDataAsync() {
    let response = await fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            console.log("data promise async await then ", data);
            return data;
        }
        );
    console.log("response data promise async await", response);
}

getDataAsync();