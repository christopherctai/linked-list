// Linked list factory 
const linkedListFactory = () => {

    let linkedList = {
        value: 'head',
        nextNode: null
    }; 

    // Build the following functions in your linked list class:
    
    // 0) check to see if the linked list has length of zero 
    const isListEmpty = () => {
        return((Object.keys(linkedList).length === 1) ? false : true); 
    }

    // 1) append(value) adds a new node containing value to the end of the list
    const append = (value) => {
        if (isListEmpty()) {
            linkedList.nextNode = value; 
        } else {
            // find the end of the linked list. 
            while (linkedList.nextNode !== null) {
                linkedList.nextNode = linkedList.nextNode.nextNode; 
            } 
            // replace the last pointer's value of null to the new node. 
            linkedList.nextNode = value;
        }
    }
    
    // 2) prepend(value) adds a new node containing value to the start of the list
    const prepend = (value) => {

    }

    // 3) size returns the total number of nodes in the list
    const size = () => {

    }
    
    // 4) head returns the first node in the list
    const head = () => {

    }

    // 5) tail returns the last node in the list
    const tail = () => {

    }

    // 6) at(index) returns the node at the given index
    const at = (index) => {

    }

    // 7) pop removes the last element from the list
    const pop = () => {

    }

    // 8) contains(value) returns true if the passed in value is in the list and otherwise returns false.
    const contains = (value) => {

    }

    // 9) find(value) returns the index of the node containing value, or null if not found.
    const find = (value) => {

    }

    // 10) toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString = () => {

    }

    return {
        linkedList,
        append,
        prepend, 
        size, 
        head, 
        tail, 
        at, 
        pop, 
        contains, 
        find, 
        toString
    }; 
}


// Node factory 
const nodeFactory = (value = null, nextNode = null) => {
    const node = { 
        value,  
        nextNode 
    };

    return node;
}

let linkedList = linkedListFactory(); 
linkedList.append(nodeFactory(1))

console.log(linkedList.linkedList); 

linkedList.append(nodeFactory(2)); 

console.log(linkedList.linkedList); 




