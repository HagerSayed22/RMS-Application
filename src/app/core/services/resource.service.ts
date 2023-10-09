import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T> {
  protected readonly APIUrl =
    SettingsService.configurationEnvironment.api.baseUrl +
    this.getResourceUrl();

  protected constructor(protected httpClient: HttpClient) {}

  abstract getResourceUrl(): string;

  toServerModel(entity: T): any {
    return entity;
  }

  fromServerModel(json: any): T {
    return json;
  }

  add(resource: T): Observable<any> {
    return this.httpClient
      .post(`${this.APIUrl}`, this.toServerModel(resource))
      .pipe(
        catchError((err) => {
          throw new Error(err.message);
        })
      );
  }
}