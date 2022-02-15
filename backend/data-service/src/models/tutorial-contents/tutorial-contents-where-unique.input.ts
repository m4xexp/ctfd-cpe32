import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TutorialContentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    tutorial_id?: string;
}
