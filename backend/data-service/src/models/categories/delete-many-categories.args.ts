import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesWhereInput } from './categories-where.input';

@ArgsType()
export class DeleteManyCategoriesArgs {

    @Field(() => CategoriesWhereInput, {nullable:true})
    where?: CategoriesWhereInput;
}
