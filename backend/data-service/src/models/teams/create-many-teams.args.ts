import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamsCreateManyInput } from './teams-create-many.input';

@ArgsType()
export class CreateManyTeamsArgs {

    @Field(() => [TeamsCreateManyInput], {nullable:false})
    data!: Array<TeamsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
