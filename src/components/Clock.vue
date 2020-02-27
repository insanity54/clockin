<template>
  <div class="clock">
    <span class="md-display-4">{{ time }}</span>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
export default {
  name: 'Clock',
  components: {
  },
  data () {
    return {
      now: DateTime.local(),
      timeFormat: 'hh:mm:ss'
    }
  },
  props: {
  },
  computed: {
    appStyles() {
        return {
            backgroundColor: `rgb(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`
        };
    },
    clockButtonStyles() {
        return this.mode != 'clock' ? { backgroundColor: 'rgba(255, 255, 255, .5)' } : {};
    },
    hexButtonStyles() {
        return this.mode !='hex' ? { backgroundColor: "rgba(255, 255, 255, .5)" } : {};
    },
    hex() {
        return Object.values(this.rgb).map(
            value => value.toString(16).toUpperCase().padStart(2, '0')
        ).join(':');
    },
    rgb() {
        return {
            r: Math.round(this.now.hour * (255 / 23)),
            g: Math.round(this.now.minute * (255 / 59)),
            b: Math.round(this.now.second * (255 / 59))
        };
    },
    time() {
        return this.now.toFormat(this.timeFormat);
    }
  },
  methods: {
    updateTime () {
      this.now = DateTime.local();
    }
  },
  created () {
    this.updateTimer = window.setInterval(this.updateTime, 1000);
  },
  destroyed () {
    window.clearInterval(this.updateTimer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  border: 3px solid black;
  text-decoration: underline;
  border-radius: 5px;
  padding: 1em;
  width: 10em;
  user-select: none;
  background-color: rgb(220, 220, 250);
}
</style>
