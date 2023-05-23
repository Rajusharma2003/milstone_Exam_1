

// This is a javaScript code for (Calculate percentage of the discount).


const   CalculatePercentageDiscount = (originalprice , discountedprice) =>{

      const discountedAmount = originalprice - discountedprice;
      
      const discountedPercentage =  (discountedAmount / originalprice) *100;
      let massage =  " This is your discounted percentage : " + discountedPercentage.toFixed(2);

      return  discountedPercentage.toFixed(2) ,massage ;
      
}

console.log(CalculatePercentageDiscount(5000 , 4500));