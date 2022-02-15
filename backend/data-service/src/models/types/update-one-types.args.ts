import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesUpdateInput } from './types-update.input';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@ArgsType()
export class UpdateOneTypesArgs {

    @Field(() => TypesUpdateInput, {nullable:false})
    data!: TypesUpdateInput;

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    where!: TypesWhereUniqueInput;
}
