import CreateUserDto from "../dtos/createUser.dto";
import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/userType.enum";

export const createUserMock: CreateUserDto = {
    cpf: '12345678900',
    email: 'emailmocka@mocka.com',
    name: 'Mocka',
    password: '123456',
    phone: '11999999999',
}