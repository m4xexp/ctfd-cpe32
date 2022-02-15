import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesCreateWithoutUserScoresInput } from './types-create-without-user-scores.input';

@InputType()
export class TypesCreateOrConnectWithoutUserScoresInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    where!: TypesWhereUniqueInput;

    @Field(() => TypesCreateWithoutUserScoresInput, {nullable:false})
    create!: TypesCreateWithoutUserScoresInput;
}
