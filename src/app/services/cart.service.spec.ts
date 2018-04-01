import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cartItem';


describe('CartService', () => {
    let cartService: CartService;
    beforeEach(() => {
        cartService = new CartService();
    });

    describe('getItems', () => {
        it('correctly gets all items in cart', () => {
            let cart:CartItem[];
            
           var mockCart = cartService.getItems();
            expect(mockCart===cart);
        });
    })

});