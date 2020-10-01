import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import s from './App.module.css';
import CatalogContainer from './components/Content/Catalog/Catalog.Container';
import CategoriesContainer from './components/Content/Categories/Categories.Container';
import CategoryContainer from './components/Content/Categories/Category/Category.Container';
import FavoritesContainer from './components/Favorites/Favorites.Contaiter';
import HeaderContainer from './components/Header/Header.Container';
import PageProductsContainer from './components/pageProduct/PageProduct.Container';
function App() {
  return (
    
    <div >
      <HeaderContainer />
      <div className={s.Content}>
        <Route exact path={`/Home/`} render={() => <CatalogContainer />} />
        <Route path={`/Home/:category/:item`} render={() => <PageProductsContainer />} />
        <Route exact path={`/Category/`} render={() => <CategoriesContainer />} />
        <Route exact path={`/Category/:Title`} render={() => <CategoryContainer />} />
        <Route path={`/Favorites`} render={() => <FavoritesContainer />} />
      </div>
    </div >
  );
}

export default compose(
  withRouter
)(App);
