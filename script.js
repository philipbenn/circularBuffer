class CircularBuffer {
    constructor(capacity) {
        this.array = new Array(capacity);
        this.capacity = capacity;
        this.readIndex = 0;
        this.writeIndex = 0;
        this.count = 0;
    }

    add(element) {
        if (this.isFull()) {
            throw new Error("Buffer is full");
        }

        this.array[this.writeIndex] = element;
        this.writeIndex = (this.writeIndex + 1) % this.capacity;
        this.count++;
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty");
        }

        const element = this.array[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;
        this.count--;
        return element;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty");
        }

        return this.array[this.readIndex];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    size() {
        return this.count;
    }
}
