import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleQuestionsUpdateOneRequiredWithoutMultipleChoiceQuestionInput } from '../multiple-questions/multiple-questions-update-one-required-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    multiple_choice_question_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    answer?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    correct_flag?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleQuestionsUpdateOneRequiredWithoutMultipleChoiceQuestionInput, {nullable:true})
    multipleQuestions?: MultipleQuestionsUpdateOneRequiredWithoutMultipleChoiceQuestionInput;
}
