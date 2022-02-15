import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesCreateWithoutChallengesInput } from './types-create-without-challenges.input';

@InputType()
export class TypesCreateOrConnectWithoutChallengesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    where!: TypesWhereUniqueInput;

    @Field(() => TypesCreateWithoutChallengesInput, {nullable:false})
    create!: TypesCreateWithoutChallengesInput;
}
