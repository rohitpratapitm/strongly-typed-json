import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HttpUtil {

public doMockGetStronglyTyped<T>(data: T, delayLength: number = 1000): Observable<T> {
        return this.getStronglyTypedMockDataAsObservable(data, delayLength);
    }

private getStronglyTypedMockDataAsObservable<T>(data: T, delayLength: number = 1000): Observable<T> {
        const response = observableOf(data);
        return response.pipe(delay(delayLength));
    }
}
