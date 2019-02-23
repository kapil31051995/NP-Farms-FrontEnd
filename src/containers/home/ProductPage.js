import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import { actionFeatures } from "../../modules/AppStructuralComponent/redux/action";
class ProductPage extends React.Component {
  state = {
    numberOfItems: 3,
    data: ""
  };
  componentWillMount = () => {
    this.props.getHomePageData();
  };
  componentWillUpdate = nextProps => {
    if (this.props !== nextProps) {
      this.setState({ data: nextProps.Product.data.Items });
    }
  };
  ItemToRender = data => {
    let items = [];
    for (let i = 0; i < data.length-1; i++) {
      let item = (
        <Grid item xs={4} key={`grid${i}`}>
          <img src = {`images/${data[i].imgPath}`} alt =""/><br/>
          Product Name :{data[i].name}
          <br />
          Price :{data[i].price}
          <br />
          available :{data[i].quantity}
          <br />
        </Grid>
      );
      items.push(item);
    }

    return items;
  };
  render() {
    return <Grid container>{this.ItemToRender(this.state.data)}</Grid>;
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { ...actionFeatures }
)(ProductPage);
