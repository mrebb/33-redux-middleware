import React, { Fragment } from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';
import { addCategory } from '../store/category';
import PropTypes from 'prop-types';

const Dashboard = props => {
  return (
    <Fragment>
      <CategoryForm onComplete={props.addCategory} buttonText="create" />
    <CategoryList/>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCategory: category => dispatch(addCategory(category))
});

Dashboard.propTypes = {
  addCategory: PropTypes.func
}
export default connect(null, mapDispatchToProps)(Dashboard);


