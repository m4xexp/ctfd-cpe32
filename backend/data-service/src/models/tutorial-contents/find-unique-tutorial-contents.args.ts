import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input';

@ArgsType()
export class FindUniqueTutorialContentsArgs {

    @Field(() => TutorialContentsWhereUniqueInput, {nullable:false})
    where!: TutorialContentsWhereUniqueInput;
}
