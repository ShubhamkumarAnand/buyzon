import { Product, FooterBanner, HeroBanner } from '../components';

const index = () => (
  <>
    HeroBanner
    <div className="products-heading">
      <h2>Best selling products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {['Product1', 'Product2'].map((product) => product)}
    </div>
    Footer
  </>
);

export default index;