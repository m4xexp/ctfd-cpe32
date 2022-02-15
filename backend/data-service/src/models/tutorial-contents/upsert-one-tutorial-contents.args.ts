import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input';
import { TutorialContentsCreateInput } from './tutorial-contents-create.input';
import { TutorialContentsUpdateInput } from './tutorial-contents-update.input';

@ArgsType()
export class UpsertOneTutorialContentsArgs {

    @Field(() => TutorialContentsWhereUniqueInput, {nullable:false})
    where!: TutorialContentsWhereUniqueInput;

    @Field(() => TutorialContentsCreateInput, {nullable:false})
    create!: TutorialContentsCreateInput;

    @Field(() => TutorialContentsUpdateInput, {nullable:false})
    update!: TutorialContentsUpdateInput;
}
