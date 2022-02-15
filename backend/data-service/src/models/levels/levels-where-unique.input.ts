import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LevelsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    level_id?: string;
}
