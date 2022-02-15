import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TutorialChapterDatasUpdateOneRequiredWithoutUserTutorialsInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-update-one-required-without-user-tutorials.input';

@InputType()
export class UserTutorialsUpdateWithoutUsersInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TutorialChapterDatasUpdateOneRequiredWithoutUserTutorialsInput, {nullable:true})
    tutorialChapterDatas?: TutorialChapterDatasUpdateOneRequiredWithoutUserTutorialsInput;
}
