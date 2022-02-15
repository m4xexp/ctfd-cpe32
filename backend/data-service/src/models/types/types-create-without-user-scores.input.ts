import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateNestedManyWithoutTypesInput } from '../challenges/challenges-create-nested-many-without-types.input';

@InputType()
export class TypesCreateWithoutUserScoresInput {

    @Field(() => String, {nullable:true})
    types_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesCreateNestedManyWithoutTypesInput, {nullable:true})
    challenges?: ChallengesCreateNestedManyWithoutTypesInput;
}
