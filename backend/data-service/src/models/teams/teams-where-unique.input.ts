import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TeamsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    team_id?: string;
}
