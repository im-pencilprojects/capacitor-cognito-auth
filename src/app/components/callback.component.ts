import {Component} from "@angular/core";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  imports: [],
  standalone: true
})
export class CallbackComponent {
  constructor(
    private oidcSecurityService: OidcSecurityService
  ) {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      console.log('User authenticated in Callback Component:', isAuthenticated);
    });
  }
}
