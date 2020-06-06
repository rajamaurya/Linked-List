class Node{

    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList{
  
     constructor(data){
       this.head = null;
       this.length = 0;
     }
     append(data){
        let currentNode = this.head;
        if(this.head == null){
          const newNode = new Node(data);
          this.head = newNode;
          this.length++;
          return;
        }
        while(currentNode.next !== null){
          currentNode = currentNode.next;
        }
        currentNode.next = new Node(data);
        this.length++;
        return;
     }
     prepend(data){
       const current = this.head;
       let newHeadNode = new Node(data);
       newHeadNode.next = current;
       this.length++;
       this.head = newHeadNode;
       return;
     }
     delete(data){
         let current = this.head;
         while(current.next !== null){
           current = current.next;
           if(current.next.data == data){
               current.next = current.next.next;
               this.length--;
               return;
           }
         }
     }
     insert(data, index){
         if(!this.head){
           this.head = new Node(data);
           this.length++;
           return;
         }
         if(index == 0){
           let newNode = new Node(data);
           newNode.next = this.head;
           this.head = newNode;
           this.length++;
           return;
         }
        let previousNode = this.getPreviousNode(index);
        const newNode = new Node(data);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        return;
     }
     getPreviousNode(index){
        let counter = 1;
        let current = this.head;
        
        while(current.next !== null){
          current = current.next;
           if(counter == index - 1){
             return current;
            }
           counter++;
        }
       
     }
  
     static printLinkedList(ls){
       const lsStr = JSON.stringify(ls);
       return lsStr;
     }
     
    getSize(){
      console.log(this.length);
      return this.length;
    }
  }
  const ls = new LinkedList();
  ls.append(2);
  ls.append(4);
  ls.append(22);
  ls.append(30);
  ls.prepend(40);
  ls.delete(30);
  ls.delete(4);
  ls.delete(22);
  ls.append(80);
  ls.append(77);
  ls.insert(50,4);
  ls.getSize();
  LinkedList.printLinkedList(ls);