/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        const newNode = new LinkedList(val)
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = this.next
            }
            current.next = newNode

        }
    }


    /** unshift(val): add new value to start of list. */

    unshift(val) {
        const newNode = new LinkedList(val)
        newNode.next = this.head
        this.head = newNode
    }

    /** pop: return & remove last item. */

    pop() {
        if (!this.head) {
            console.log("Empty - There is no node left in this list...");
            return;
        }
        if (!this.head.next) {
            // Only one node in the list
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        // Update the next pointer of the second-to-last node to null
        previous.next = null;
    }


    /** shift(): return & remove first item. */
    shift() {
        if (this.head) {
            let current = this.head;
            let next = this.head.next;
            this.head = next;
            current.next = null; // Disconnect the current node from the list
        } else {
            console.log("The list is already empty!");
        }
    }



    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx < 0) {
            console.log("Index should be a non-negative integer.");
            return undefined;
        }

        let current = this.head;
        let count = 0;

        while (current) {
            if (count === idx) {
                return current.data;
            }

            current = current.next;
            count++;
        }

        console.log("Index out of bounds.");
        return undefined;
    }


    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx < 0) {
            console.log("Index should be a non-negative integer.");
            return undefined;
        }

        let current = this.head;
        let count = 0;

        while (current) {
            if (count === idx) {
                current.val = val
            }

            current = current.next;
            count++;
        }

        console.log("Index out of bounds.");
        return undefined;
    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx < 0) {
            console.log("Index should be a non-negative integer.");
            return;
        }

        const newNode = new Node(val);

        if (idx === 0) {
            // Insert at the beginning of the list
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (current && count < idx) {
            previous = current;
            current = current.next;
            count++;
        }

        if (count === idx) {
            // Insert the new node before the current node
            previous.next = newNode;
            newNode.next = current;
        } else {
            console.log("Index out of bounds. Node not inserted.");
        }
    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx < 0) {
            console.log("Index should be a non-negative integer.");
            return undefined;
        }

        if (!this.head) {
            console.log("The list is empty. Nothing to remove.");
            return undefined;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        if (idx === 0) {
            // Remove the first node
            this.head = current.next;
            current.next = null;
            return current.data;
        }

        while (current && count < idx) {
            previous = current;
            current = current.next;
            count++;
        }

        if (count === idx && current) {
            // Remove the node at the specified index
            previous.next = current.next;
            current.next = null;
            return current.data;
        } else {
            console.log("Index out of bounds. Node not removed.");
            return undefined;
        }
    }

    /** average(): return an average of all values in the list */
    average() {
        if (!this.head) {
            console.log("The list is empty. Unable to calculate average.");
            return undefined;
        }

        let current = this.head;
        let sum = 0;
        let count = 0;

        while (current) {
            sum += current.data;
            count++;
            current = current.next;
        }

        if (count === 0) {
            console.log("The list is empty. Unable to calculate average.");
            return undefined;
        }

        return sum / count;
    }



}

module.exports = LinkedList;
