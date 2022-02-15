import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@ArgsType()
export class FindUniqueTypesArgs {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    where!: TypesWhereUniqueInput;
}
