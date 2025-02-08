// Bai 1
class Container<T> {
    protected items: T[] = [];

    getItems() {
        return this.items;
    }

    add(item: T) {
        this.items.push(item);
    }

    remove(item: T) {
        if (this.items.find((value) => value === item)) {
            this.items = this.items.filter((value) => value !== item);
            return true;
        }
        return false;
    }
}

const container = new Container<number>();
container.add(1);
container.add(2);
container.add(3);
// container.remove(1);
console.log(container.getItems());

// Bai 2
function filterContainer<T>(container: Container<T>, filter: (item: T) => boolean): T[] {
    return container.getItems().filter(filter);
}

console.log(filterContainer<number>(container, (item) => item % 2 === 0))
