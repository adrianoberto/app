interface String {
    equals(values: string): boolean;
    isTrue() : boolean;
}

String.prototype.isTrue = function () { 
    return /true/.test(this);
};

String.prototype.equals = function(value:string) { 
    return this == value 
};