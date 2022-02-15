import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TeamMembersWhereUniqueInput {

    @Field(() => String, {nullable:true})
    user_id?: string;
}
