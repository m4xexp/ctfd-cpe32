import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamsCreateInput } from './teams-create.input';

@ArgsType()
export class CreateOneTeamsArgs {

    @Field(() => TeamsCreateInput, {nullable:false})
    data!: TeamsCreateInput;
}
