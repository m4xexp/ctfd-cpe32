import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionUncheckedUpdateManyWithoutMultipleQuestionsInput } from '../multiple-choice-question/multiple-choice-question-unchecked-update-many-without-multiple-questions.input';

@InputType()
export class MultipleQuestionsUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    multiple_question_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    challenge_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    question?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hint?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionUncheckedUpdateManyWithoutMultipleQuestionsInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionUncheckedUpdateManyWithoutMultipleQuestionsInput;
}
