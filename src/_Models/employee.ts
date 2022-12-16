export class Employee {
    EmpId : number;
    firstName : string;
    lastName : string;

    constructor(empid : number, firstname : string, lastname:string){
        this.EmpId = empid;
        this.firstName = firstname;
        this.lastName = lastname;
    }
}
