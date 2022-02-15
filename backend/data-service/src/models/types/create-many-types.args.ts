import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesCreateManyInput } from './types-create-many.input';

@ArgsType()
export class CreateManyTypesArgs {

    @Field(() => [TypesCreateManyInput], {nullable:false})
    data!: Array<TypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
