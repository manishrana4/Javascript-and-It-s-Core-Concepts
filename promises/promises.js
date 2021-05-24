function getData() {

    let data = fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            console.log("data promise fetch then", data);
            return data;
        }
        );
    console.log("console log before response data available:", data)
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
    console.log("console log only after response data promise async await", response);
}

getDataAsync(); 