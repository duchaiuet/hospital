import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UtilsService {
  hashEmail(email: string): string {
    return crypto.createHash('sha256').update(email).digest('hex');
  }
}
