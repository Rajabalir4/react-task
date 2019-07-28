import React from "react"

import './TabContainer.css'
import ListTab from "./ListTab"
import FavouriteTab from "./FavouriteTab"
import Counter from "./Counter"


class TabContainer extends React.Component{
	
	constructor(){
		super();
		// ActiveTab = true means first tab active else second tab
		//isDataLoaded will remain false untill the data is loaded from api
		this.state = {
			activeTab : true,
			isDataLoaded:false,
			data : [],
			favourite :[]
		}

		this.handleTabChange = this.handleTabChange.bind(this);
		this.handleSelectCard = this.handleSelectCard.bind(this);
	}

	handleTabChange(e){
		if(e.target.id === "tab1" && this.state.activeTab === false)
		this.setState({activeTab:true})
		else if(e.target.id === "tab2" && this.state.activeTab === true)
		this.setState({activeTab:false})
	}

	handleSelectCard(id,isActive){
		if(isActive){
			var temp1 = this.state.data;
			
			temp1[id].isButtonEnable = false;
			this.setState({data:temp1});
			

			//adding the card into favorites
			const favouriteAddItem = this.state.data.filter(function(item){
				return item.uid == id
			});
			var temp = this.state.favourite;
			temp.push(favouriteAddItem)
			this.setState({favourite : temp});
		}

	}


	// fetching the data from the link with proxy
	componentDidMount(){
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://18.139.137.183:8080/favourite.json'
	fetch(proxyUrl + targetUrl)
  	.then(blob => blob.json())
  	.then(data => {
  		// adding uid and isButtonActive value for simplification
  		data.map((item,index)=>{return ( item.uid = index , item.isButtonEnable = true )});
    	this.setState({data:data,isDataLoaded:true})
    	});

  	

	}

	render(){

		return(

			<div className="container">	
			{/*tabs*/}
  			<span className="tabLabel" id="tab1" style = {this.state.activeTab?{borderBottom: "2px solid #1E0996",color : "#242B36"}:{}}  onClick={this.handleTabChange}>List </span>
  			<span className="tabLabel" id="tab2" style ={!this.state.activeTab?{borderBottom: "2px solid #1E0996",color : "#242B36"}:{}} onClick={this.handleTabChange}>Favourites </span>


  			{/*top counter*/}
			<Counter
			 isTabActive={this.state.activeTab}
			  listLength={this.state.data.length}
			  favouriteLength={this.state.favourite.length}/>


			{/*Tab's content*/}
  			<div className='content'>
  				{
  				this.state.isDataLoaded?
  				(this.state.activeTab ? <ListTab data={this.state.data} handleSelectCard={this.handleSelectCard} /> : <FavouriteTab data ={this.state.favourite}/>):
  				(<span className="loading">Loading...</span>)
  				}
  			</div>
  			

  			</div>
			);
	}
}

export default TabContainer;