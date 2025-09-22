import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import CreateUserDto from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = await this.findUserByEmail(createUserDto.email).catch(() => undefined);
        if (user) {
            throw new BadGatewayException('User already exists');
        }
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: hash,
        });
    }

    async getUserByIdUsingRelations(userId: number){
        const user = await this.userRepository.findOne({
            where: { 
                id: userId 
            },
            relations: ['addresses', 'addresses.city', 'addresses.city.state'],
        });

        if (!user) {
            throw new NotFoundException(`UserId ${userId} not found.`);
        }

        return user;

    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            }
        })

        if (!user) {
            throw new NotFoundException(`UserId ${userId} not found.`);
        }

        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                email: email,
            }
        })

        if (!user) {
            throw new NotFoundException(`User with email ${email} not found.`);
        }

        return user;
    }
}
