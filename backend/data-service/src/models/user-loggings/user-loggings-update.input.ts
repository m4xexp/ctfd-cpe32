import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutUserLoggingsInput } from '../users/users-update-one-required-without-user-loggings.input';

@InputType()
export class UserLoggingsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    log_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ip?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutUserLoggingsInput, {nullable:true})
    users?: UsersUpdateOneRequiredWithoutUserLoggingsInput;
}
