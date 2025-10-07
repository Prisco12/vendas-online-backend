import { ProductEntity } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category' })
export class CategoryEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false })
    name: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(() => ProductEntity, (product) => product.category)
    @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    products?: ProductEntity[];
}