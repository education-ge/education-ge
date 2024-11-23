import { ValidateIf, ValidationOptions } from 'class-validator';

export function IsNullable(validationOptions?: ValidationOptions) {
    return ValidateIf((object, value) => value !== null, validationOptions);
}
