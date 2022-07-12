import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { NotFoundError } from 'rxjs';

// Using sendgrid to send mails
// Referred link: https://dev.to/thexdev/sending-email-with-sendgrid-in-nestjs-50in
@Injectable()
export class MailersService {
  readonly defaultFrom;
  readonly url;
  constructor(private readonly configService: ConfigService) {
    // Setting send api key
    SendGrid.setApiKey(this.configService.get<string>('SENDGRID_API_KEY'));
    this.defaultFrom = this.configService.get<string>('SENDGRID_SENDER_ID');
    this.url = this.configService.get<string>('URL');
  }

  async data(info: any, link: string = null) {
    if (link) {
      const finalUrl = this.url + link;
      info.text = info.text.replace('THISLINK', finalUrl);
      info.html = info.html.replace('THISLINK', finalUrl);
    }

    const mailerData = {
      to: info.email,
      subject: info.subject,
      from: info.from || this.defaultFrom, // Fill it with your validated email on SendGrid account
      text: info.text,
      html: info.html,
    };
    return await this.privateSend(mailerData);
  }

  // Private Method used to send mail
  async privateSend(mail: SendGrid.MailDataRequired) {
    try {
      const transport = await SendGrid.send(mail);
      // avoid this on production. use log instead :)
      console.log('Email send to user: ', mail);
      return transport;
    } catch (Error) {
      console.log('Error: ', Error);
      throw new BadRequestException({
        error: Error,
        errorMessage: Error.message,
      });
    }
  }
}
