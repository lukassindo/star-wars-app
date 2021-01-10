const getStockInfo = () => {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=FBPJ0C2UYVOC98XV')  
        .then((response) => response.json())
        .then((results) => {
           let newData = [];
           let data = results["Time Series (5min)"];
          
        //    console.log(typeof data);

           for (let key in data) {
               let dataObj = [];
            // skip loop if the property is from prototype
            if (!data.hasOwnProperty(key)) continue;
                // console.log(key);
                dataObj.push(key)
           let obj = data[key];
            for (let prop in obj) {
                // skip loop if the property is from prototype
                if (!obj.hasOwnProperty(prop)) continue;
                dataObj.push(obj[prop]);
                
                
            }
            newData.push(dataObj);
            // console.log(newData);
        }

           return newData;
        });
}


export default {
    getStockInfo,
}