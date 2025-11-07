class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class linkedList {
    constructor() {
        this._head = null;
        this._size = 0;
        this._tail = null;
    }

    append(value){
       const newNode = new node(value);
       if(this._head === null) { 
        this._head = newNode; 
        this._tail = newNode;
       } else {
        this._tail.nextNode = newNode; 
        this._tail = newNode; 
       }
       this._size++; 
    }

    prepend(value){
        const newNode = new node(value);
        if(this._head === null) { 
        this._head = newNode; 
        this._tail = newNode; 
       } else {
        newNode.nextNode = this._head;
        this._head = newNode; 
       }
       this._size++; 
    }

    size(){
        return this._size; 
    }

    head(){
        return this._head; 
    }

    tail(){
        return this._tail; 
    }

    at(index){
        let current = this._head; 
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
        let current = this._head; 

        if (this._head === null){ 
            return;
        } else if (this._head === this._tail){ 
            this._head = null; 
            this._tail = null; 
            this._size--; 
            return;
        } else {
            while (current.nextNode !== this._tail) { 
                current = current.nextNode;
            }
            current.nextNode = null;
            this._tail = current; 
            this._size--; 
            return;
        }
    }

    shift(){

        if (this._head === null){ 
            return;
        } else if (this._head === this._tail){ 
            this._head = null; 
            this._tail = null; 
            this._size--; 
            return;
        } else {
            this._head = this._head.nextNode; 
            this._size--; 
        }
    }

    contains(value){
        let current = this._head; 

        if (this._head === null){ 
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
        let current = this._head; 
        let count = 0;

        if (this._head === null){ 
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
        let current = this._head; 
        let log = "";

        while (current !== null){
            log += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return log + `null`;
    }

    insertAt(value, index) {
        
        if (index < 0 || index > this._size){ 
            return null;
        } else if (index === 0){
            this.prepend(value);
        } else if (index === this._size){ 
            this.append(value);
        } else {
            let previousNode = this.at(index - 1);
            const newNode = new node(value);
            newNode.nextNode = previousNode.nextNode;
            previousNode.nextNode = newNode;
            this._size++; 
        }
    }

    removeAt(index){
        if (index < 0 || index >= this._size){ 
            return null;
        } else if (index === 0){
            this.shift();
        } else if (index === this._size - 1){ 
            this.pop();
        } else {
            let currentNode = this.at(index);
            let previousNode = this.at(index - 1);
            previousNode.nextNode = currentNode.nextNode;
            this._size--; 
        }
    }
}

export { linkedList };