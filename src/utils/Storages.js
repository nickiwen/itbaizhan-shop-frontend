const Storages = {
    setItem(key,value){
        localStorage.setItem(key,value);
    },
    getItem(key){
        return localStorage.getItem(key);
    },
    clearItem(){
        localStorage.clear()
    },
    removeItem(key){
        localStorage.removeItem(key);
    }
}
export default Storages