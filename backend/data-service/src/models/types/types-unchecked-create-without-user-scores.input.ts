import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesUncheckedCreateNestedManyWithoutTypesInput } from '../challenges/challenges-unchecked-create-nested-many-without-types.input';

@InputType()
export class TypesUncheckedCreateWithoutUserScoresInput {

    @Field(() => String, {nullable:true})
    types_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    challenges?: ChallengesUncheckedCreateNestedManyWithoutTypesInput;
}
