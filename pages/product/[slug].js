import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { urlFor, client } from '../../lib/client';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} alt="" />
          </div>
          {/* <div className="small-images-container">
            { image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className=""
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>
        <div className="product-details-desc">
          <h1>{ name } </h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
  slug{
    current
  }
}`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="product" && slug.current =='${slug}'][0]`;
  const productQuery = '*[_type=="product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
