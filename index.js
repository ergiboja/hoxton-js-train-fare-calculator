let age =prompt("What Is Your Age?")
let distance = prompt("How many km will you travel?")
const pricePerkm = 0.21
const juniordiscount = 0.2
const seniordiscount = 0.4
const cost = distance * pricePerkm


if (age<18){
    const totalprice = cost  -(cost * juniordiscount)
    console.log("Your Total price including Discount is :",totalprice,"Euro")
    
}
else if (age>65){
     const totalprice = cost  -(cost * seniordiscount)
    console.log("Your Total price including Discount is :",totalprice , "Euro")

}
else{
    console.log("Your Total price is :",cost,"Euro")
}