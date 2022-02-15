import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesCreateInput } from './categories-create.input';

@ArgsType()
export class CreateOneCategoriesArgs {

    @Field(() => CategoriesCreateInput, {nullable:false})
    data!: CategoriesCreateInput;
}
