import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

/* NB: if we inject a *service* into a *service*, we need to add the
       @Injectable metadata to the service being injected *into*, otherwise
       Angular doesn't know it can inject into this class.
       This isn't the case for @Component or @Directive, because Angular
       is already aware of them as Injectables */

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {

  }

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
