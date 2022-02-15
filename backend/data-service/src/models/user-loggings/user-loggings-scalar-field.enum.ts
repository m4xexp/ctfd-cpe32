import { registerEnumType } from '@nestjs/graphql';

export enum UserLoggingsScalarFieldEnum {
    log_id = "log_id",
    user_id = "user_id",
    action = "action",
    ip = "ip",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserLoggingsScalarFieldEnum, { name: 'UserLoggingsScalarFieldEnum', description: undefined })
