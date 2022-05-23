// One Way of to add APP

const App = {
  data() {
    return {
      name: "App 1",
    };
  },
};

Vue.createApp(App).mount("#app");

// Another way of adding APP
Vue.createApp({
  data() {
    return { name: "App 2" };
  },
}).mount("#app2");
