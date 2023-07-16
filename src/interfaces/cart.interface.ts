export interface SaveCartRequest {
    productId: number;
    type: 'ADD' | 'REMOVE';
}