class Name {
    fname;
    lname;
    constructor(fistname, lastname){
      this.fname = firstname;
      this.lname = lastname
    }
   
   
    get fullname(){
      return this.fname+" "+this.lname;
    }
    get initials(){
     return this.fname[0].toUpperCase()+"."+this.lname[0].toUpperCase();
    }
      
  }
  
  const name = new Name("john", "SMITH");
  console.log(name.fname);
  console.log(name.lname);
  console.log(name.fullname);
  console.log(name.initials);