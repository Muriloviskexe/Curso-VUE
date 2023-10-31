const MyNameApp = {
  data() {
    return {
      name: "João",
      idade: 20,
    }
  }
}

Vue.createApp(MyNameApp).mount('#app')