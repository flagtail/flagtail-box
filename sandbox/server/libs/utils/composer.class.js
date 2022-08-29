module.exports = class Composer{

    static init(initFunc){
        return {
            stream(...funcList){
                return funcList.reduce((previous, current)=>{
                    return current(previous);
                }, initFunc)
            }
        }        
    }
    
}