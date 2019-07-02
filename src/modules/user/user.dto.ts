export class UserDto {
    readonly username: string;
    readonly password: string;
}

export class UpdatePasswordDto {
    readonly password: string;
    readonly newPassword: string;
}