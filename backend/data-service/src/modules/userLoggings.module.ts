import { Module } from '@nestjs/common'
import { UserLoggingsService } from 'src/services/userLoggings.service'
import { UserLoggingsResolver } from 'src/resolvers/userLoggings.resolvers'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [UserLoggingsService, UserLoggingsResolver],
})
export class UserLoggingsModule {}
