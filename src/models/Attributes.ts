export class Attributes<T> {
    constructor(private data: T) { }

    get(key: string): number | string | boolean {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }
}