import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamsUpdateManyMutationInput } from './teams-update-many-mutation.input';
import { TeamsWhereInput } from './teams-where.input';

@ArgsType()
export class UpdateManyTeamsArgs {

    @Field(() => TeamsUpdateManyMutationInput, {nullable:false})
    data!: TeamsUpdateManyMutationInput;

    @Field(() => TeamsWhereInput, {nullable:true})
    where?: TeamsWhereInput;
}
