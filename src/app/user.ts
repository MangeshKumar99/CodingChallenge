export class User {
    constructor(
        public firstname: string,
        public lastname: string,
        public email:string,
        public phone: number,
        public address: string,
        public city:string,
        public state:string,
        public zip:number,
        public occupation: string,
        public job:string,
        public topic: string,
        public date:string,
        public comment:string,
        public courses={
            HTML:false,
            CSS:false,
            JavaScript:false,
            Nodejs:false,
            MongoDB:false,
            Angular:false,
            React:false,
            Vue:false,
            Python:false,
            FrontEndDevelopment:false,
            BackEndDevelopment:false,
            Devops:false,
            PHP:false,
            WordPress:false,
            WebSecurity:false,

        }

        
       
    ) {}
}
