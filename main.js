const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
      ],
      // Coding challenge
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  // COMPUTED PROPERTIES
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    // Coding challenge - Add an onSale boolean to the data. Use a computed property to display "brand + product is on sale" whenever onSale is true
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale!";
      }
      return "";
    },
  },
});
