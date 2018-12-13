export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    mobile:string;
    constructor(id: number, userName: string, firstName: string, lastName: string, password: string,mobile:string) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password; 
        this.mobile = mobile;
    }
}