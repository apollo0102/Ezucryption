import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface ClassContructor {
  new (...args: any[]): {};
}
// dto: any will fail when error occurs. To avoid those, we need an interface to work with
export function Serialize(dto: ClassContructor) {
  return UseInterceptors(new SerializerInterceptor(dto));
}

export class SerializerInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler
    // console.log("I am running before the handler", context)

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log("I am running before response is sent out", data)
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
