const Splitter = {
  data() {
    return {
      bill: null,
      numberOfPeople: null,
      tip: null,
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
      this.bill = null
      this.numberOfPeople = null
      this.tip = null
      this.hasCustomTip = false
      this.customTip = null
    },
  },
  computed: {
    tipPerPerson() {
      const tipPercentage =
        (this.hasCustomTip ? this.customTip : this.tip) / 100

      const tipPerPerson = (tipPercentage * this.bill) / this.numberOfPeople

      return tipPerPerson || 0
    },

    totalPerPerson() {
      return this.bill / this.numberOfPeople + this.tipPerPerson || 0
    },

    canReset() {
      return this.bill || this.numberOfPeople || this.tip
    },
  },
}

Vue.createApp(Splitter).mount("#app")
