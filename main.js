const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      //   Coding challenge - Add a URL to the data object - Use v-bind to bind the URL to an anchor tag's href attribute
      url: "www.google.com",
    };
  },
});
