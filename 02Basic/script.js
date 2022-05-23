const App = {
  data() {
    return {
      title: "Hello World",
      subHeading: "Welcome to Vue JS course.",
      imagePath: "image.jpg",
      buttonText: "Click Here",
    };
  },
};

Vue.createApp(App).mount("#app");
