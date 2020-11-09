import { IsDefined } from 'class-validator';

export class ILoginRequest {
  @IsDefined()
  login: string;

  @IsDefined()
  password: string;
}

export interface ILoginResponse {
  user: {
    name: string;
    level: number;
  };
  token: string;
}
