 //Hard Challenge

 const tomHeight=9
 const tomMass=8
 const jerryHeight=10
 const jerryMass=45

 const tomBmi = (tomMass/tomHeight**2);
 console.log(tomBmi);

 const jerryBmi= (jerryMass/jerryHeight**2);
 console.log(jerryBmi);

 if (tomBmi>jerryBmi){
 console.log("Tom's BMI is higher than Jerry's");
 } else if (jerryBmi > tomBmi){
     console.log ("Jerry's BMI is higher than Tom's");
 }
