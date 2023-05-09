"use strict";

let myInfo = {
    name: "Pursulane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126",
};


    //Not executing
function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip);
};

//calls the function
printContact(myInfo);