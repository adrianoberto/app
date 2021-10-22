export class Serialize {

    private static _formData;

    public static toFormData(object: any) {

        this._formData = new FormData();

        for(var property in object) {
            var value = object[property];
            this.addFormItem(property, value);
        }        
        return this._formData;
    }

    private static addFormItem(propertyName, propertyValue) {     
        
        if(propertyValue) {
            this._formData.append(propertyName, propertyValue);
        }
    }
}