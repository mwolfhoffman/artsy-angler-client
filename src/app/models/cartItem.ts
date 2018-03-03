export class CartItem {

    constructor(private product: any) {
        this.categories = product.categories;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
        this.slug = product.slug;
        this.taxable = product.taxable
        this.title = product.title;
        this.v = product.number;
        this.id = product.id;
        this.qty = 1;

    }

    categories: Array<any>;
    description: string;
    image: Object;
    price: Number;
    slug: string;
    taxable: boolean;
    title: string;
    v: number;
    id: string;
    qty: number;
}
