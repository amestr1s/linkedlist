class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    append(value){
       const newNode = new node(value);
       if(this.head === null) {
        this.head = newNode;
        this.tail = newNode;
       } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
       }
       this.size++;
    }

    prepend(value){
        const newNode = new node(value);
        if(this.head === null) {
        this.head = newNode;
        this.tail = newNode;
       } else {
        newNode.nextNode = this.head;
        this.head = newNode;
       }
       this.size++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current;
            } else {
                current = current.nextNode;
                count++;
            }
        }
        return null;
    }

    pop(){
        let current = this.head;

        if (this.head === null){
            return;
        } else if (this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        } else {
            while (current.nextNode !== this.tail) {
                current = current.nextNode;
            }
            current.nextNode = null;
            this.tail = current;
            this.size--;
            return;
        }
    }

    shift(){

        if (this.head === null){
            return;
        } else if (this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        } else {
            this.head = this.head.nextNode;
            this.size--;
        }
    }

    contains(value){
        let current = this.head;

        if (this.head === null){
            return false;
        } else {
            while (current !== null){
                if (current.value === value){
                    return true;
                } else {
                    current = current.nextNode;
                }
            }
            return false;
        }
    }

    find(value){
        let current = this.head;
        let count = 0;

        if (this.head === null){
            return null;
        } else {
            while (current !== null){
                if (current.value === value){
                    return count;
                } else {
                    current = current.nextNode;
                    count++;
                }
            }
            return null;
        }
    }

    toString(){
        let current = this.head;
        let log = "";

        while (current !== null){
            log += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return log + `null`;
    }

    insertAt(value, index) {
        

        if (index < 0 || index > this.size){
            return null;
        } else if (index === 0){
            this.prepend(value);
        } else if (index === this.size){
            this.append(value);
        } else {
            let previousNode = this.at(index - 1);
            const newNode = new node(value);
            newNode.nextNode = previousNode.nextNode;
            previousNode.nextNode = newNode;
            this.size++;
        }
    }

    removeAt(index){
        if (index < 0 || index >= this.size){
            return null;
        } else if (index === 0){
            this.shift();
        } else if (index === this.size - 1){
            this.pop();
        } else {
            let currentNode = this.at(index);
            let previousNode = this.at(index - 1);
            previousNode.nextNode = currentNode.nextNode;
            this.size--; 
        }
    }
}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { linkedList };