const Splitter = {
  data() {
    return {
      bill: 0,
      numberOfPeople: 1,
      tip: 0,
      hasCustomTip: false,
      customTip: null,
      tipPercentages: [5, 10, 15, 25, 50],
    }
  },
  methods: {
    setTip(num) {
      this.tip = num
      this.hasCustomTip = false
      this.customTip = null
    },

    reset() {
      this.bill = 0
      this.numberOfPeople = 1
      this.tip = 0
      this.hasCustomTip = false
      this.customTip = null
    },
  },
  computed: {
    tipPerPerson() {
      const tipPercentage =
        (this.hasCustomTip ? this.customTip : this.tip) / 100

      const tipPerPerson = (tipPercentage * this.bill) / this.numberOfPeople

      return tipPerPerson
    },

    totalPerPerson() {
      return this.bill / this.numberOfPeople + this.tipPerPerson
    },
  },
}

Vue.createApp(Splitter).mount("#app")
