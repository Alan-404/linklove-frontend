import { User } from "./user"

export class FriendRequest{
    id: string = ''
    request_from: string = ''
    request_to: string = ''
    created_at: string = ''
}

export class ResponseFriendRequest{
    requests: Array<FriendRequest> = []
    users: Array<User> = []
}