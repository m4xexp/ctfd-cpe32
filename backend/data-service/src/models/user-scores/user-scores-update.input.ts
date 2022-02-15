import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutUserScoresInput } from '../users/users-update-one-required-without-user-scores.input';
import { ChallengesUpdateOneRequiredWithoutUserScoresInput } from '../challenges/challenges-update-one-required-without-user-scores.input';
import { LevelsUpdateOneRequiredWithoutUserScoresInput } from '../levels/levels-update-one-required-without-user-scores.input';
import { TypesUpdateOneRequiredWithoutUserScoresInput } from '../types/types-update-one-required-without-user-scores.input';
import { CategoriesUpdateOneRequiredWithoutUserScoresInput } from '../categories/categories-update-one-required-without-user-scores.input';

@InputType()
export class UserScoresUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_score?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    time_score?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutUserScoresInput, {nullable:true})
    users?: UsersUpdateOneRequiredWithoutUserScoresInput;

    @Field(() => ChallengesUpdateOneRequiredWithoutUserScoresInput, {nullable:true})
    challenges?: ChallengesUpdateOneRequiredWithoutUserScoresInput;

    @Field(() => LevelsUpdateOneRequiredWithoutUserScoresInput, {nullable:true})
    levels?: LevelsUpdateOneRequiredWithoutUserScoresInput;

    @Field(() => TypesUpdateOneRequiredWithoutUserScoresInput, {nullable:true})
    types?: TypesUpdateOneRequiredWithoutUserScoresInput;

    @Field(() => CategoriesUpdateOneRequiredWithoutUserScoresInput, {nullable:true})
    categories?: CategoriesUpdateOneRequiredWithoutUserScoresInput;
}
