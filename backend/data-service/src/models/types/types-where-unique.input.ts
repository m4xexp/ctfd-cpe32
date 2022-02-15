import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TypesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    types_id?: string;
}
