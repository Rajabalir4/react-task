import React from 'react'


function Counter(props){
	return(
		<span className="badge" > 
		{ props.isTabActive ? props.listLength : props.favouriteLength }</span>
		)
}

export default Counter;