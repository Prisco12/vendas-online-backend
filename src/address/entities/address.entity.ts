import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'user_id', nullable: false })
    name: number;

    @Column({name: 'complement', nullable: false })
    complement: string;

    @Column({name: 'number', nullable: false })
    numberAddress: string;

    @Column({name: 'cep', nullable: false })
    cep: string;

    @Column({name: 'city_id', nullable: false })
    cityId: number;

    @Column({name: 'type_user', nullable: false })
    typeUser: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;


}