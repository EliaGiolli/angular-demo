export enum UserRole{
    User = 'user',
    Admin = 'admin'
}

export interface UserProps {
    userName: string,
    email?: string,
    role: UserRole,
    imgUrl?: string
}