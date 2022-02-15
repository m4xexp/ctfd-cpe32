import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesCreateInput } from './types-create.input';
import { TypesUpdateInput } from './types-update.input';

@ArgsType()
export class UpsertOneTypesArgs {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    where!: TypesWhereUniqueInput;

    @Field(() => TypesCreateInput, {nullable:false})
    create!: TypesCreateInput;

    @Field(() => TypesUpdateInput, {nullable:false})
    update!: TypesUpdateInput;
}
