import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_products';
  info: {
    description: '';
    displayName: 'Product';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product': ProductProduct;
    }
  }
}
