// export default
let temp = new Proxy(
    {
        get<T>(key: string): T {
            return null;
        },
        set(key: string, value: any): boolean {
            return false;
        },
        remove(key: string): boolean {
            return false;
        },
    },
    {
        get(target: object, prop: string, receiver: object): any {
            console.log(target, prop, receiver);
            return Reflect.get(target, prop, receiver);
        },
    }
) as {
    get: Function;
    set: Function;
    remove: Function;
};
console.log(temp.get("test"));
