import { Component, EventEmitter, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

/* NB: AccountsService is provided heirarchically because it's provided in the
       app component. This means all child components of app (like this one)
       are also provided this *same instance*.
       It is possible to include the AccountsService here again in the Account
       component providers, but that would create a *new instance* of
       AccountsService and would override the one provided heirarchically. */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
    this.accountsService.updateStatus(this.id, status);
  }
}
