import { ReturnsStateDto } from "src/state/dtos/returnState.dto";
import { CityEntity } from "../entities/city.entity";

export class ReturnCityDto {
    name: string;
    state?: ReturnsStateDto;

    constructor(cityEntity: CityEntity) {
        this.name = cityEntity.name;
        this.state = cityEntity.state ? new ReturnsStateDto(cityEntity.state) : undefined;
    }
}
