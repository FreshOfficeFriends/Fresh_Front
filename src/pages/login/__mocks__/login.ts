import { http, HttpResponse } from 'msw';
import { CheckUserUnicData } from './checkUnicUserMock';
import { HttpStatus } from '@shared';

export const checkUnicUserMock = [
  http.post('sso/auth/check-unique-email', async ({ request }) => {
    sessionStorage.setItem('is-authenticated', 'true');

    const loginData = await request.json();

    if (loginData === 'lol@gmail.com') {
      return new HttpResponse(null, { status: HttpStatus.Conflict });
    }

    return HttpResponse.json(CheckUserUnicData.checkUnicUser200);
  }),
];
