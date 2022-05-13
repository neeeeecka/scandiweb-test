import { Component } from 'react';
import styled from 'styled-components';
import MiniCart from '../Cart/MiniCart';
import CurrenctyPicker from './CurrencyPicker';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import { GQL_GET_CATEGORIES } from '../../services/graphql/queries';
import { Link } from 'react-router-dom';
import {
  categorySelected,
  fetchCategories,
  selectCategories,
  selectSelectedCategory
} from './categoriesSlice';

import { connect } from 'react-redux';
import { fetchCategoryItems } from '../ProductListing/productListingSlice';

//test from nvim

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 3;
  padding: 0 80px;
  height: 80px;

  :not(nav) > a {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledHeaderButton = styled.button`
  transition: all 0.25s ease;
  color: var(--color-text);
  padding: 30px 16px;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 2px solid white;
  ${(props) =>
    props.selected
      ? 'border-color: var(--color-primary); color: var(--color-primary);'
      : ''}
  &:hover, &:focus {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`;

const RightWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

const Logo = styled.span`
  background-image: url('/assets/logo.svg');
  width: 41px;
  height: 41px;
`;

class Header extends Component {
  render() {
    const {
      categories,
      selectedCategory,
      categorySelected,
      fetchCategoryItems
    } = this.props;
    const selectedCategoryName = selectedCategory.name || categories[0]?.name;

    return (
      <>
        <StyledHeader>
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/?category=${category.name}`}
                onClick={() => {
                  categorySelected(category.name);
                  fetchCategoryItems(category.name);
                }}
              >
                <StyledHeaderButton
                  selected={category.name === selectedCategoryName}
                >
                  {category.name}
                </StyledHeaderButton>
              </Link>
            ))}
          </nav>
          <RightWrapper>
            <CurrenctyPicker />
            <MiniCart />
          </RightWrapper>
        </StyledHeader>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state),
    selectedCategory: selectSelectedCategory(state)
  };
};

const mapDispatchToProps = {
  categorySelected,
  fetchCategoryItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
