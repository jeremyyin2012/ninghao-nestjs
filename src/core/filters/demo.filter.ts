import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class DemoFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
