Vue.createApp({
  //Vueオブジェクトに元々要旨されている関数
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}).mount("#app")
