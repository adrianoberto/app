interface Boolean {
    equals(values: string): boolean;
    isTrue() : boolean;
    isFalse() : boolean;
}

Boolean.prototype.isTrue = function () { 
    return /true/.test(this.toString());
};

Boolean.prototype.isFalse = function () { 
    return /false/.test(this.toString());
};

Boolean.prototype.equals = function(value:string) { 
    return this == value 
};