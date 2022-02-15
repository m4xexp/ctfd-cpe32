import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserScoresUncheckedUpdateManyWithoutTypesInput } from '../user-scores/user-scores-unchecked-update-many-without-types.input';

@InputType()
export class TypesUncheckedUpdateWithoutChallengesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    types_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserScoresUncheckedUpdateManyWithoutTypesInput, {nullable:true})
    userScores?: UserScoresUncheckedUpdateManyWithoutTypesInput;
}
