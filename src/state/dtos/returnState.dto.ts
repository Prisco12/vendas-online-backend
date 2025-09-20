import { StateEntity } from "../entities/state.entity";

export class ReturnsStateDto {
    name: string;

    constructor(state: StateEntity) {
        this.name = state.name;
    }
}