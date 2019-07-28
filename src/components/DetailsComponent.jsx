import React from 'react'


function DetailsComponent(props){ 
	const style = props.type==="offer"? {backgroundColor:"#1E0996",color:"white",borderRadius:4,padding:4} : {};
	return(
		<div className="description">
  		<span className="large-text">{props.title}</span><br/>
  		<span className="small-text">{props.desc}</span><br/>
  		<span className="small-text" style={style} >{props.type}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  		<span className="views">{kFormatter(props.vcount)}</span><br/>
  		{props.children}
  		</div>
		)
}

function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}
export default DetailsComponent;