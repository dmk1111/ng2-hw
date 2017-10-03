import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  private appConfig = {
    App: 'TaskManager',
    Ver: '1.0'
  };
  constructor() { }

  getConstants() {
    return this.appConfig;
  }
}
