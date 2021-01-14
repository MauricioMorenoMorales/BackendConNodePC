const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			resolve('hello world')
		} else {
			reject(new Error('Hello error'))
		}
	}, 1000)
})

promise
	.then(msg => msg.toUpperCase())
	.then(msg => console.log(`Message: ${msg}`))
	.catch(err => console.log`error: ${err}`)
