export class Account{
    id: String = '';
    email: String = '';
    password: String = '';
}


export class ResponseLogin{
    success: boolean = false;
    access_token: string = ''
}