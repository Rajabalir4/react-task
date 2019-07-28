import React from 'react';

import ImageComponent from "./ImageComponent"
import DetailsComponent from "./DetailsComponent"


function FavouriteTab(props){
	console.log(props)
const  list = props.data.map( (dataObj) => (
		dataObj.map((dataObj) => (
		<div key={dataObj.uid} className="card">
		<ImageComponent 
		imageUrl={dataObj.imageUrl} />
		<DetailsComponent 
		title = {dataObj.title } 
		desc = {dataObj.desc} 
		type = {dataObj.type} 
		vcount = { dataObj['view-count'] } 
		>
		</DetailsComponent>
		</div>
	))));
	
	return (list);	
}


export default FavouriteTab;