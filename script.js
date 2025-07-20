//your JS code here. If required.
const initialPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4])
		}, 3000)
	})
}
const evenNumArr = (arr) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const even = arr.filter(num => num % 2 === 0);
			document.getElementById('output').textContent = even;
			resolve(even);
		}, 1000)
	})
}
const multiplyByTwo = (arr) => {
	return new Promise((resolve, reject) => {
		setTimout(() => {
			const result = arr.map((item) => item * 2);
			document.getElementById('output').textContent = result;
			resolve(result);
		}, 2000)
	})
}
initialPromise()
.then(evenNumArr)
.then(multiplyByTwo)