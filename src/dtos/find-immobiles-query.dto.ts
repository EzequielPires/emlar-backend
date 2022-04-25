import { BaseQueryParametersDto } from "./base-query-parameters.dto";

export class FindImmobilesQueryDto extends BaseQueryParametersDto {
    user: string;
    type: number;
    key_type: number;
    pet: boolean;
}