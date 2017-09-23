import { Component } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  // Get access to the logging service using Angular's dependency injection
  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert(`New status: ${status}`);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
