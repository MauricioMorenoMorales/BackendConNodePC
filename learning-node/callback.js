const asyncCallback = function (cb) {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			return cb(null, 'hello world')
		} else {
			cb(new Error('Hello error'))
		}
	}, 1000)
}

asyncCallback((err, msg) => {
	if (err) {
		console.error('Error', err)
	} else {
		console.log('message: ', msg)
	}
})
