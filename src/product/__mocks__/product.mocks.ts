import { categoryMock } from "../../category/__mocks__/category.mocks";
import { ProductEntity } from "../entities/product.entity";

export const productMocks: ProductEntity = {
    categoryId: categoryMock.id,
    createdAt: new Date(),
    id: 1,
    image: 'https://example.com/image.png',
    name: 'Sample Product',
    price: 99.99,
    updatedAt: new Date(),
    
}