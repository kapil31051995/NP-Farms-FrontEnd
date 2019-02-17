import React from 'react'
import Grid from '@material-ui/core/Grid'
import Myjson  from '../../modules/mockData'
import {connect} from 'react-redux'

import {actionFeatures} from '../../modules/AppStructuralComponent/redux/action'
class ProductPage extends React.Component {
  state = {
    numberOfItems: 3 ,
    data:''
  }
 componentWillMount = () =>{debugger
   console.log(this.props)
  this.props.getHomePageData() 
 }
componentWillUpdate  = (prevProps)=>{
  if(this.props !== prevProps)
  {
    console.log(this.props.data)
    this.setState({data:this.props.data})    
  }

}
  ItemToRender = () => {
   
 
    let items = []
    for (let i = 0; i < this.state.numberOfItems; i++) {
      let item = (
        <Grid item xs={4} id={`grid${i}`}> 
        <div>
        {/* <img src = {`${Myjson.item[i].imagePath}`} alt =""/><br/> */}
        Product Name  :{Myjson.item[i].name}<br/>
        Price :{Myjson.item[i].price}<br/>
        quality :{Myjson.item[i].quality}<br/>
       available :{Myjson.item[i].quantity}<br/>
       </div>
        </Grid>
      )
      items.push(item)
    }
  
    return items
  }
  render() {
    
    return <Grid container>{this.ItemToRender()}</Grid>
  }
}
const mapStateToProps = state =>{debugger
  return {
   Product:state.product
  }
}


export default connect(mapStateToProps ,{...actionFeatures} )(ProductPage)
