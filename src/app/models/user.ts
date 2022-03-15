export class User{
    id: String = '';
    first_name: String = '';
    last_name: String = '';
    gender: String = '';
    birth_date: String = '';
    phone: String = '';
    country: String = '';
    address: String = '';
    avatar: String = '';
    created_at : String = '';
    modified_at: String = '';
}

export class ResponseUser{
    user: User
}

export class ResponseRegister{
    success: boolean = false;
    message: String = '';
}