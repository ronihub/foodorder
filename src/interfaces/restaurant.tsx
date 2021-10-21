export interface RestaurantPageProps {
  restaurant: RestaurantClient;
}

export interface RestaurantClient {
  id: number;
  cover_image?: any;
  restaurant_name: string;
  restaurant_location: string;
  categories: Category[];
  urlpath: string;
}

export interface RestaurantClientCardProps {
  restaurant: RestaurantClient;
}

export interface RestaurangCardTwoProps {
  image: any;
  title: string;
  location: string;
  reviewNumber: number;
  discount: number;
}

export interface Category {
  title: string;
  products: Product[];
}

export interface Product {
  product_id: number;
  product_title: string;
  product_options: GeneralOption[];
  product_cost: number;
  product_category: string;
  product_image?: any;
}

export interface ProductProps {
  product: Product;
}

export interface CategoryProps {
  title: string;
  icon?: any;
}

export interface CategoryMenuProps {
  title: string;
  icon?: any;
  products: Product[];
}

export interface GeneralOption {
  option_title: string;
  options: Option[];
  obligatory: {
    isObligatory: boolean;
    numbOfOptionsToBeObligatory: number;
    maxLimit?: number;
  };
  isFree: boolean;
}

export interface Option {
  title: string;
  price: number;
}

export interface OptionProps {
  option: GeneralOption;
}

export interface RestaurantTrackOrderCardProps {
  restaurant_id: number;
}
