import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  constructor(private config: Config) { }

  getLogin() {
    return this.config.login;
  }

  getEmail() {
    return this.config.email;
  }

  getId() {
    return this.config.id;
  }
}

class Config {
  login: string;
  email: string;
  id: number;
}
