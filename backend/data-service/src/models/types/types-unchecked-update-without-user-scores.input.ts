import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChallengesUncheckedUpdateManyWithoutTypesInput } from '../challenges/challenges-unchecked-update-many-without-types.input';

@InputType()
export class TypesUncheckedUpdateWithoutUserScoresInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    types_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChallengesUncheckedUpdateManyWithoutTypesInput, {nullable:true})
    challenges?: ChallengesUncheckedUpdateManyWithoutTypesInput;
}
