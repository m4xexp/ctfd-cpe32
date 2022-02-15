import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsUpdateInput } from './tutorial-contents-update.input';
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input';

@ArgsType()
export class UpdateOneTutorialContentsArgs {

    @Field(() => TutorialContentsUpdateInput, {nullable:false})
    data!: TutorialContentsUpdateInput;

    @Field(() => TutorialContentsWhereUniqueInput, {nullable:false})
    where!: TutorialContentsWhereUniqueInput;
}
