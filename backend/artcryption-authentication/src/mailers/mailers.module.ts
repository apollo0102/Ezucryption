import { Global, Module } from '@nestjs/common';
import { MailersService } from './mailers.service';

@Global()
@Module({
  providers: [MailersService],
  exports: [MailersService],
})
export class MailersModule {}
