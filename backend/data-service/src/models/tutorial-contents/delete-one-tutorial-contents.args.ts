import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input';

@ArgsType()
export class DeleteOneTutorialContentsArgs {

    @Field(() => TutorialContentsWhereUniqueInput, {nullable:false})
    where!: TutorialContentsWhereUniqueInput;
}
