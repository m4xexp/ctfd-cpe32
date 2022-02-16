import { Module } from '@nestjs/common'
import { UsersService } from 'src/services/users.service'
import { UsersResolver } from 'src/resolvers/users.resolvers'
import { AuthModule } from 'src/authentication/auth.module'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
