import React, { useState } from 'react'

function Counter() {
	const [state, setState] = useState(0)

	let increment = () => {
		setState(state + 1)
	}

	let decrement = () => {
		setState(state - 1)
	}

	return (
		<div>
			<h1>{state}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Counter