import { BaseQueryParametersDto } from "./base-query-parameters.dto";

export class FindImmobilesQueryDto extends BaseQueryParametersDto {
    type: number;
    key_type: number;
    pet: boolean;
}