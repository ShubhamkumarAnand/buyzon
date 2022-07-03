import React from 'react';
import { urlFor, client } from '../../lib/client';

const ProductDetails = () => (
  <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current ==' ${slug}'][0]`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default ProductDetails;
