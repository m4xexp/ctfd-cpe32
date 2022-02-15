import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';

@ArgsType()
export class DeleteManyTypesArgs {

    @Field(() => TypesWhereInput, {nullable:true})
    where?: TypesWhereInput;
}
