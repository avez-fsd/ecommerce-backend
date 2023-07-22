export interface SaveCartRequest {
    productId: number;
    type: 'ADD' | 'REMOVE';
    withSummary: boolean;
}
export interface DeleteCartItemRequest {
    productId: number;
    withSummary: boolean;
}

export interface CartSummary {
    products: CartSummaryProduct[],
    totalMrp: number;
    totalSellingPrice:number;
    totalDiscount: number;
    totalDeliveryFee: number;
    finalAmount: number;
}

export interface CartSummaryProduct {
    name: string;
    mrp: number;
    selling_price:number;
    discount: number;
    weight: number;
    quantity: number;
}

export interface GuestCartProduct {
    productId: number;
    quantity: number;
}