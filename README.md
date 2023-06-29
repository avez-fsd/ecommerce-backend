# ecommerce-backend
E-commerce Backend Node App

Flow:
1. Order got created with status as Not Confirmed
2. User does payment
3. Payment notification or web hook got called
4. Insert into payments table and status will be as per the payment status of pg and also log the payment status in payment status log table
5. Confirm the order, also log the order status in order status logs table. Deciding factor for confirming the order Is stock and also price changes( currently price changes is not in current scope)
6. Check if confirm order is success if success then capture the payment if manual capture else cancel the payment

Orders: 

Id, order_no, total_amount, payment_id, total_delivery_fee, user_id, order_status_id (not confirmed or confirmed or full filled), created_at, updated_at

Order Details:

Id, order_no, parend_order_id, user_id, product_id, product_name, mrp, selling-price, discount, quantity, delivery_fee, total_price, shipping_addr, shipping_city, shipping_state, shipping_pincode, shipping_weight, order_status_id, created_at, updated_at

Order Statuses:

Id, status, created_at, updated_at

Status:
1. Not confirmed
2. Confirmed
3. Cancelled
4. Auto Cancelled
5. Ready to pickup
6. Shipped
7. Out for delivery
8. Delivered
9. Full Filled

Order Status Log:

Id, child_order_id, status, created_at

Products: 

Id, name, mrp, selling_price, discount, weight, category_id, stock, is_active, created_at, updated_at

Categories:

Id, name, created_at, updated_at

Users:

Id, name, email, password, created_at, updated_at

Payments:

Id, order_id, user_id, payment_type, payment_reference_id, amount, commission_percentage, platform_commission, transfer_amount, payment_status_id, created_at, updated_at

Payment Statuses:
Id, status, created_at, updated_at

Status: 
1. Pending (Un captured state)
2. Success (Captured)
3. Failed

Customer Addresses:

Id, user_id, address, city, state, pincode,  created_at, updated_at

Commission:

Id, commission_percentage, created_at, updated_at

Delivery Fee

Id, min_price, max_price, delivery_fee, created_at, updated_at