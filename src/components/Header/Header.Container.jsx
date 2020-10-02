import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = (props) => {
   
  
    return (
        <Header {...props}  />
    )
}
let mapStateToProps = (state) => {
    return {
        product: state.Home.product
    }
}

export default connect(mapStateToProps)(HeaderContainer)