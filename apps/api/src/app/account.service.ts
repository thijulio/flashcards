import { User } from '@flashcards/api-interfaces';
import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
    constructor(private http: HttpService) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://flashcards-10c7b.firebaseio.com/users.json?format=export').pipe(
            map((response: AxiosResponse<any[]>) => {
                const user: User[] = response.data;
                console.log(user);

                return response.data;
            }),
        );
    }

    public getUser(id: string): Observable<User> {
        return this.http
            .get<User>(`https://flashcards-10c7b.firebaseio.com/users/${id}.json`)
            .pipe(map((response: AxiosResponse<any>) => response.data));
    }

    public registerUser(email: string, password: string): Observable<User> {
        return this.http
            .post<{ name: string }>('https://flashcards-10c7b.firebaseio.com/users.json', {
                email,
                password,
                _id: 'ttt',
            })
            .pipe(
                map((response: AxiosResponse<any>) => {
                    const { name } = response.data;
                    return { email, username: 'test', id: name, gender: '' };
                }),
            );
    }
}
