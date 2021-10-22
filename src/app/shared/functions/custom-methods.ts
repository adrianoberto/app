import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FunctionCall } from '@angular/compiler';

// @Injectable({
//     providedIn: 'root'
// })
export class CustomMethod {

    private _context;
    private count: number = 0;    
    private _finished = new BehaviorSubject<boolean>(false);

    //constructor(context: any) { 
    constructor() { 
        //this._context = context;
    }

    methods: any[] = [];
    //executeWait(context, methods: Function[]): BehaviorSubject<boolean>{
    executeWait(context, methods: Function[]): BehaviorSubject<boolean> {
        
        // console.log('passando aqui');
        this.methods = methods;
        this.methods.forEach((func) => {
            //console.log('executando chamada');            
            FunctionCall.bind(context).call();
        });
        //console.log(this);
        
        // 
        // this.methods.forEach(x=> x.bind(this._context).call());
        return this._finished;
    }

    markAsFinalized(method: any) {
        let index = this.methods.indexOf(method.name);
        this.methods.splice(index, 1);        
        if(this.methods.length == 0) {
            console.log('atualizando');        
            this._finished.next(true);
        }
    }
}