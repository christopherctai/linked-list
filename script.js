const util = require('util')

// Linked list factory 
const linkedListFactory = () => {

    let linkedList = {
        value: 'head',
        nextNode: null
    }; 

    // Build the following functions in your linked list class:
    
    // 0) check to see if the linked list has length of zero 
    const isListEmpty = () => {
        return((linkedList.nextNode === null) ? true : false); 
    }

    // base recursive functions 
    const getEndOfLinkedList = (linkedList) => {
        return (linkedList.nextNode === null) ? linkedList : getEndOfLinkedList(linkedList.nextNode); 
    }

    const getSizeOfLinkedList = (linkedList) => {
        return (linkedList.nextNode === null) ? 0 : total = 1 + getSizeOfLinkedList(linkedList.nextNode);
    }

    const getNodeAtIndex = (linkedList, index) => {
        return (index === 0) ? linkedList.nextNode : getNodeAtIndex(linkedList.nextNode, index - 1); 
    }

    const doesListContainValue = (linkedList, value) => {
        return (linkedList.value === value) ? true : (linkedList.nextNode !== null) ? doesListContainValue(linkedList.nextNode, value) : false; 
    } 

    const findIndexForValue = (linkedList, value) => {
        return (linkedList.value === value) ? 0 : total = 1 + findIndexForValue(linkedList.nextNode, value); 
    }

    const convertLinkedListToString = (linkedList) => {
        return (linkedList.nextNode === null) ? `(${linkedList.value}) -> null` : `(${linkedList.value}) -> ${convertLinkedListToString(linkedList.nextNode)}`;
    }

    // 1) append(value) adds a new node containing value to the end of the list
    const append = (value) => {
        (isListEmpty()) ? linkedList.nextNode = value : getEndOfLinkedList(linkedList).nextNode = value; 
    }
    
    // 2) prepend(value) adds a new node containing value to the start of the list
    const prepend = (value) => {
        value.nextNode = linkedList.nextNode
        linkedList.nextNode = value; 
    }

    // 3) size returns the total number of nodes in the list
    const size = () => {
        return getSizeOfLinkedList(linkedList)
    }
    
    // 4) head returns the first node in the list
    const head = () => {
        return linkedList.nextNode; 
    }

    // 5) tail returns the last node in the list
    const tail = () => {
        return getEndOfLinkedList(linkedList); 
    }

    // 6) at(index) returns the node at the given index
    const at = (index) => {
        return getNodeAtIndex(linkedList, index); 
    }

    // 7) pop removes the last element from the list
    const pop = () => {
        getNodeAtIndex(linkedList, getSizeOfLinkedList(linkedList) - 2).nextNode = null; 
    }

    // 8) contains(value) returns true if the passed in value is in the list and otherwise returns false.
    const contains = (value) => {
        return doesListContainValue(linkedList, value); 
    }

    // 9) find(value) returns the index of the node containing value, or null if not found.
    const find = (value) => {
        return findIndexForValue(linkedList.nextNode, value); 
    }

    // 10) toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString = () => {
        return convertLinkedListToString(linkedList); 
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
        value: value,  
        nextNode: nextNode
    };

    return node;
}

let linkedList = linkedListFactory();
console.log(util.inspect(linkedList.linkedList, false, null, true)); 





