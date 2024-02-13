import { inject } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn() && !authService.connectedUser) {
    return authService.getConnectedUser().pipe(map(() => true));
  } else {
    return true;
  }
};
