import { throwError as observableThrowError, Observable, from } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class DataService {

    private _apiURL = 'http://localhost:5000/';

    constructor(private _http: HttpClient, private _activatedRoute: ActivatedRoute) {

    }

    GetStats() {
        return this._http.get(this._apiURL + "RandomNumbers/");
    }
}