import React from 'react'
import ListIcons from '../../components/ListIcons';
import Category from '../../components/Categories/category';
import OfferCard from '../../components/OfferCard';
import ProductsCard from '../../components/Products/ProductsCard';
import Subscribe from '../../components/Subscribe';
import CardProvider from '../../components/CardProvider';
import Vendor from '../../components/vendor/Vendor';

const Layout = () => {
return (
    <>
      <ListIcons />
      {/* Categories Start */}
      <Category />
      {/* Offer Start */}
      <OfferCard />
      {/* Products Start */}
      <ProductsCard />
      {/* Subscribe Start */}
      <Subscribe />
      {/* Products Start */}
      <ProductsCard />
      {/* Vendor Start */}
      <CardProvider />
      <Vendor/>
    </>
  );
}

export default Layout