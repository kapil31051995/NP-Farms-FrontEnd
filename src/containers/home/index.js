import React from 'react'
import {AppTopBar ,SideNav} from '../../modules/AppStructuralComponent'
import { connect } from 'react-redux'
import ProductPage from '../../containers/home/ProductPage'

const Home = props => (
  <div>
  <AppTopBar/>
  <SideNav/>
  <ProductPage/>
   </div>
)

const mapStateToProps = state => ({
  state
})



export default connect(mapStateToProps)(Home)
