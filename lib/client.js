import ImageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '0c5vygku',
  dataset: 'production',
  apiVersion: '2022-07-01',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const url = (source) => builder.image(source);
