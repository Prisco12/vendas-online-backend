import { userEntityMock } from "../../user/__mocks__/user.mock";
import { AddressEntity } from "../entities/address.entity";
import { cityMock } from "../../city/__mock__/city.mock";

export const addressMock: AddressEntity = {
    id: 2345234,
    cep: '12345678',
    complement: 'Apt 101',
    numberAddress: 34234,
    createdAt: new Date(),
    updatedAt: new Date(),
    cityId: cityMock.id,
    userId: userEntityMock.id
}