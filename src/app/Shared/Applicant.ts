export class Applicant{
    constructor(
        public ID:number,
        public Name:string,
        public FamilyName:string,
        public Address:string,
        public CountryOfOrigin:string,
        public EMailAdress:string,
        public Age:number,
        public Hired?:boolean
    ){}

}