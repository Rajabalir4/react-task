import React from 'react'

class SelectButton extends React.Component{
constructor(props){
	super(props);
		
	this.onSelect = this.onSelect.bind(this);
}

onSelect(e){
	this.props.handleSelectCard(e.target.name,this.props.isButtonActive)
}

 render(){


 const style = this.props.isButtonActive?{}:{color : "black",borderColor:"black",pointerEvents: "none"};

  return(<button className="button" style={style} name={this.props.uid} onClick={this.onSelect}>{this.props.isButtonActive ?"Add to favourite": "added"} </button>);
 }

}

export default SelectButton;