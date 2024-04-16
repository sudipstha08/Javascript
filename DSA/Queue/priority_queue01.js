class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	insert(element, priority) {
		this.heap.push({ element, priority });
		this.heapifyUp();
	}

	deleteMax() {
		if (this.isEmpty()) {
			return "Underflow";
		}
		const max = this.heap[0];
		const last = this.heap.pop();
		if (!this.isEmpty()) {
			this.heap[0] = last;
			this.heapifyDown();
		}
		return max;
	}

	peekMax() {
		return this.isEmpty() ? "Priority queue is empty" : this.heap[0];
	}

	isEmpty() {
		return this.heap.length === 0;
	}

	size() {
		return this.heap.length;
	}

	heapifyUp() {
		let currentIndex = this.heap.length - 1;
		while (currentIndex > 0) {
			const parentIndex = Math.floor((currentIndex - 1) / 2);
			if (this.heap[currentIndex].priority > this.heap[parentIndex].priority) {
				[this.heap[currentIndex], this.heap[parentIndex]] = [
					this.heap[parentIndex],
					this.heap[currentIndex],
				];
				currentIndex = parentIndex;
			} else {
				break;
			}
		}
	}

	heapifyDown() {
		let currentIndex = 0;
		while (true) {
			const leftChildIndex = 2 * currentIndex + 1;
			const rightChildIndex = 2 * currentIndex + 2;
			let maxIndex = currentIndex;
			if (
				leftChildIndex < this.heap.length &&
				this.heap[leftChildIndex].priority > this.heap[maxIndex].priority
			) {
				maxIndex = leftChildIndex;
			}
			if (
				rightChildIndex < this.heap.length &&
				this.heap[rightChildIndex].priority > this.heap[maxIndex].priority
			) {
				maxIndex = rightChildIndex;
			}
			if (maxIndex !== currentIndex) {
				[this.heap[currentIndex], this.heap[maxIndex]] = [
					this.heap[maxIndex],
					this.heap[currentIndex],
				];
				currentIndex = maxIndex;
			} else {
				break;
			}
		}
	}
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.insert("Task 1", 3);
priorityQueue.insert("Task 2", 1);
priorityQueue.insert("Task 3", 5);

console.log(priorityQueue.peekMax()); // Output: { element: 'Task 3', priority: 5 }
console.log(priorityQueue.deleteMax()); // Output: { element: 'Task 3', priority: 5 }
console.log(priorityQueue.size()); // Output: 2
