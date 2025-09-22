import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/userType.enum";

export const userEntityMock: UserEntity = {
    cpf: '12345678900',
    createdAt: new Date(),
    email: 'emailmocka@mocka.com',
    id: 4234,
    name: 'Mocka',
    password: '123456',
    phone: '11999999999',
    typeUser: UserType.User,
    addresses: [],
    updatedAt: new Date(),
}