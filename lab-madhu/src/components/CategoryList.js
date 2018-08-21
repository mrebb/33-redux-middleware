import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryList = (props) => {
  return (
    
    <ul>
      {props.categories.map(cat => <CategoryItem key={cat.id} category={cat} />)}
    </ul>
    
  );
};

const mapStateToProps = (state) => ({ categories: state.categoryState.categories });

export default connect(mapStateToProps, null)(CategoryList);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(Object)
}