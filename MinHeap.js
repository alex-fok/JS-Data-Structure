const MinHeap = {
  heap: [null],
  createNode: function(key, value) {
    return {
      priority: key,
      value: value
    }
  },
  insert: function([value, key]) {
    const {heap} = this;
    heap.push(this.createNode(key, value));
    let current = heap.length - 1;
    while (current !== 1) {
      const parent = Math.floor(current >> 1);
      if (heap[current].priority < heap[parent].priority) {
        [heap[current], heap[parent]] = [heap[parent], heap[current]];
        current = parent;
      }
      else break;
    }
  },
  heapifyDown: function() {
    const {heap} = this;
    let current = 1;
    while (current << 1 < heap.length) {
      const nxtLvl = current << 1;
      let minNxt;
      // console.log('nxtLvl: ', nxtLvl);
      // console.log('heap[nxtLvl]: ', heap[nxtLvl]);
      if (heap[nxtLvl + 1] !== undefined)
        minNxt = heap[nxtLvl].priority < heap[nxtLvl + 1].priority ? nxtLvl : nxtLvl + 1;
      else minNxt = nxtLvl;
      // console.log('minNxt: ', minNxt);
      if (heap[minNxt].priority < heap[current].priority) {
        [heap[current],heap[minNxt]] = [heap[minNxt], heap[current]];
        current = minNxt;
      }
      else break;
    }
  },
  remove: function() {
    const {heap} = this;
    if (!heap[1]) return null;
    // Switch elements
    [heap[1], heap[heap.length-1]] = [heap[heap.length-1], heap[1]];
    const el = heap.pop();
    this.heapifyDown();
    return el;
  }
}
// MinHeap.insert([1,3]);
// MinHeap.insert([2,35]);
// MinHeap.insert([5,9]);
// MinHeap.insert([6,12]);
// MinHeap.insert([7,4]);
// MinHeap.insert([8,20]);
// console.log(MinHeap.heap);
// console.log('Node Removed: ', MinHeap.remove());
// console.log(MinHeap.heap);
// console.log('Node Removed: ', MinHeap.remove());
// console.log(MinHeap.heap);
// MinHeap.insert([3,1]);
// MinHeap.insert([4,2]);
// console.log('Node Removed: ', MinHeap.remove());
// console.log(MinHeap.heap);
// console.log('Node Removed: ', MinHeap.remove());
// console.log(MinHeap.heap);
// console.log('Node Removed: ', MinHeap.remove());
// console.log(MinHeap.heap);
// console.log('Node Removed: ', MinHeap.remove());