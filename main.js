const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: [
        { id: 0001, str: "Small" },
        { id: 0002, str: "Medium" },
        { id: 0003, str: "Large" },
        { id: 0004, str: "X-Large" },
      ],
    };
  },
});
