import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserScoresUncheckedUpdateManyWithoutLevelsInput } from '../user-scores/user-scores-unchecked-update-many-without-levels.input';

@InputType()
export class LevelsUncheckedUpdateWithoutChallengesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    level_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserScoresUncheckedUpdateManyWithoutLevelsInput, {nullable:true})
    userScores?: UserScoresUncheckedUpdateManyWithoutLevelsInput;
}
