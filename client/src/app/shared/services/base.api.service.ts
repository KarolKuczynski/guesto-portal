import { HttpClient } from '@angular/common/http';

export class BaseApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  post<T>(url: string, body: T) {
    return this.httpClient.post(url, body);
  }
}
