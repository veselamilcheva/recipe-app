import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';
import { registerLocaleData } from '@angular/common';
import { tap } from 'rxjs/operators';

export interface AuthResponseData {
    idToken: string;
    email: string;	
    refreshToken: string;
    expiresIn: string;	
    localId: string;
    registered?: boolean; 
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new Subject<User>();

    constructor(private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]]',
            {
                email:	email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError), 
            tap(resData => {
                this.handleAuthentification(
                    resData.email, 
                    resData.localId, 
                    resData.idToken, 
                    +resData.expiresIn
                ) 
               
            })
        )
    }

    logIn(email:string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
            {
                email:	email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError),
            tap(resData => {
                this.handleAuthentification(
                    resData.email, 
                    resData.localId, 
                    resData.idToken, 
                    +resData.expiresIn
                ) 
            })
        );
    }

    private handleAuthentification(email: string, userId: string, token: string, expiresIn: number) {
        const experationDate = new Date(new Date().getTime() + expiresIn * 1000); 
        const user = new User(
            email, 
            userId,
            token,
            experationDate
        );
        this.user.next(user);
    }

    private handleError(errorResponse: HttpErrorResponse) {       
        let errorMessage = 'An unknown error occured!';
        if(!errorResponse.error || !errorResponse.error.error ) {
            return throwError(errorMessage);
        }
        switch(errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already!'
            case 'EMAIL_NOT_FOUND': 
            errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
            case 'INVALID_PASSWORD': 
            errorMessage = 'The password is invalid or the user does not have a password.'
        }

            return throwError(errorMessage);    
    }
}