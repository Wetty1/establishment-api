import { IHashProvider } from './IHashProvider';
import { hash, compare } from 'bcrypt';

export class BCryptHashProvider implements IHashProvider {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }
  compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
