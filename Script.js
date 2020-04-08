let data = [
    {   
        principal: 2500,
        time: 1.8
    },
        
    {  
         principal: 1000,
        time: 5
    },
    
    {   
        principal: 3000,
        time: 1
    },

    {  
         principal: 2000, 
        time: 3
    }
    
    ];

    function interestCalculator (myarr) {
        myarr.forEach(y => {
            let rate;
            if (y.principal >= 2500 && (y.time > 1 && y.time <3)){
                 rate = 3
                }
        else if (y.principal >= 2500 && y.time >=3){
                 rate = 4
                }
        else if (y.principal < 2500 || y.time <=1){
                rate = 2
                }
        else {
                rate = 1
        }
        let interest =(y.principal * rate * y.time)/100;
        let interestData=[
            { 
            principal: y.principal,
            rate: rate,
            time: y.time,
            interest: interest
            }
        ];
        console.log("interestData")

        return interestData;
       });
    }
    interestCalculator(data);

