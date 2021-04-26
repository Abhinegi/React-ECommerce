
const prices= {"2-Passenger Sedan": {
    "base-fare": 100,
    "pay-by-distance": 10,
    "pay-by-hour": 50
},
"2-Passenger Suburban SUV": {
    "base-fare": 250,
    "pay-by-distance": 20,
    "pay-by-hour": 80
}
}

export const calculateFare = (formData, distance) =>{
    var resPrice={};
    var myPrice={};
    for(var i of Object.keys(prices)){
        if(i === formData?.vehicle ){
            myPrice= prices[i];
            break;
        }
    }
    console.log("util ",formData,myPrice)
    
       if(formData?.serviceType?.toUpperCase()?.includes("Hourly Service")!=-1) 
        resPrice["estimatedFare"] = (myPrice["base-fare"])+(myPrice["pay-by-distance"] * formData?.travelTime);
       else 
        resPrice["estimatedFare"] = (myPrice["base-fare"])+(myPrice["pay-by-distance"]* distance);
       resPrice["gratuity"]= 0.2* resPrice["estimatedFare"] ;
       resPrice["airportTollTax"] = 12.5;
       resPrice["nightCharges"] = 10;
       resPrice["totalPrice"] = resPrice["estimatedFare"]  + resPrice["gratuity"] +resPrice["airportTollTax"] + resPrice["nightCharges"];
    console.log(resPrice)
       return resPrice;
}