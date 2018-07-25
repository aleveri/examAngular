import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class AppConfiguracion {

    static API_URL = 'http://localhost';

    constructor() { }

    getHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }
}