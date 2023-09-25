class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    max() {
        let maxValue = 0;
        for (let i = this.front; i < this.queue.length; i++) {
            if (maxValue < this.queue[i][1]) {
                maxValue = this.queue[i][1];
            }
        }
        return maxValue;
    }
    
    size() {
        return this.rear - this.front;
    }
}

function solution(priorities, location) {
    
    const queue = new Queue();
    
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([i, priorities[i]]);
    }

    
    console.log(queue.max());
    
    let cnt = 0;
    
    
    while(queue.size() != 0){
        let currMax = queue.max();
        
        const currValue = queue.dequeue();
        if (currValue[1] < currMax) {
            queue.enqueue(currValue);
        }
        else {
            cnt += 1;
            if (currValue[0] == location) {
                break;
            }
        }
    }
    
    return cnt;
    


}