import { User } from "./user";
import {PostMedia} from './postMedia'

export class Post{
    id: string = '';
    content: String = '';
    user_id: string = '';
    created_at: string = '';
    modified_at: string = ''
}

export class ResponsePosts{
    posts: Array<Post>
}


export class ShowPosts{
    posts: Array<Post> = [];
    users: Array<User> = [];
    media: Array<Array<PostMedia>> = []
}



export class AddPost{
    post: Post;
    media: Array<any> = []
}
