export type TReview = {
 rating: number;
};

export type TProduct = {
 id: number;
 title: string;
 description: string;
 price: number;
 rating: number;
 availabilityStatus: string;
 reviews: TReview[];
 thumbnail: string;
 images: string[];
};

export type TProductsResponse = {
 products: TProduct[];
 limit: number;
};
