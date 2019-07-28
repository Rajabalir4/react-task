import React from 'react';

import "./TabContainer"
import ImageComponent from "./ImageComponent"
import DetailsComponent from "./DetailsComponent"
import SelectButton from "./SelectButton"


class ListTab extends React.Component{




render(){
	const  list = this.props.data.map( (dataObj) => (
		<div key={dataObj.uid} className="card">
		<ImageComponent 
		imageUrl={dataObj.imageUrl} />
		<DetailsComponent 
		title = {dataObj.title } 
		desc = {dataObj.desc} 
		type = {dataObj.type} 
		vcount = { dataObj['view-count'] } 
		>
		<SelectButton uid={dataObj.uid} handleSelectCard={this.props.handleSelectCard} isButtonActive = {dataObj.isButtonEnable}/>
		</DetailsComponent>

		</div>
		
		));
	
	return (list);	
  	
 }

}

export default ListTab