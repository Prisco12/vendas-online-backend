import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/userType.enum";

export const userEntityMock: UserEntity = {
    cpf: '12345678900',
    createdAt: new Date(),
    email: 'emailmocka@mocka.com',
    id: 4234,
    name: 'Mocka',
    password: '$2b$10$jZAMfk.9enDjGIfW2QidheWZ40UCaGkLMbdjyjQYpE5P8CnCFd2Bi',
    phone: '11999999999',
    typeUser: UserType.User,
    addresses: [],
    updatedAt: new Date(),
}