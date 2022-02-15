import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamsWhereInput } from './teams-where.input';

@ArgsType()
export class DeleteManyTeamsArgs {

    @Field(() => TeamsWhereInput, {nullable:true})
    where?: TeamsWhereInput;
}
