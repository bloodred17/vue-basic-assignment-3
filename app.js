const app = Vue.createApp({
  data() {
    return {
      messageLower: '"Not there yet"',
      messageGreater: '"Too much!"',
      counter: 0,
      message: '',
    };
  },
  methods: {
    onAdd(num) {
      this.counter += num;
    },
  },
  computed: {
    onCounterUpdate() {
      console.log(this.counter);
      if (this.counter > 37) {
        this.message = this.messageGreater;
      } else if (this.counter < 37) {
        this.message = this.messageLower;
      } else {
        this.message = this.counter;
      }
      return this.message;
    }
  },
  watch: {
    message() {
      setTimeout(() => {
        this.counter = 0;
        this.message = '';
      }, 5000);
    }
  }
});

app.mount('#assignment');