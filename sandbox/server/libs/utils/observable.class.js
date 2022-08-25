module.exports = class Observable {
    
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func);
        return this;
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func)
        return this;
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }

    
    notifySafe(data){
        return {
            inspect(callback){
                this.observers.forEach(observer => {
                    if(callback(data)){
                        observer(data)
                    }
                });
            }
        }
    }
    
}