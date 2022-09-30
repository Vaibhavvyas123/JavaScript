let mobilePhone =
{
    Model : "9362",
    brand : "Samsung",
    "5G" : "true",
    Sim : "Dual",
    color : "black",
    storage: 64,

    displayTech : (){
       console. log(this.Model)
       console.log(this.storage);

    },
    remainingStorage(){
        return this.storage-this.usedStorage;
    }

}
mobilePhone.displayTech()
console.log("Storage remaining : " + mobilePhone.remainingStorage());