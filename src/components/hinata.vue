<template>
  <div class="girl-c" ref="girl">
    <img v-if="picNum===1" class="girl-pic" src="@/assets/ct_1.png" />
    <img v-if="picNum===2" class="girl-pic" src="@/assets/ct_5.png" />
    <img v-if="picNum===3" class="girl-pic" src="@/assets/ct_4.png" />
    <img v-if="picNum===4" class="girl-pic" src="@/assets/ct_3.png" />
    <img v-if="picNum===5" class="girl-pic" src="@/assets/ct_2.png" />
    <div
      class="girl-main"
      @mousedown.stop.prevent="mouseDownHandleelse($event)"
      @mouseup.stop.prevent="mouseUpHandleelse($event)">
    </div>
  </div>
</template>
<script>
export default {
  name: 'vueHinata',
  data() {
    return {
      picNum: 1,
      moveDataelse: {
        x: null,
        y: null
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.picNum ++;
      if (this.picNum > 5) {
        this.picNum = 1;
      }
    }, 3000);
  },
  methods: {
    mouseDownHandleelse(e) {
      this.moveDataelse.x = e.pageX - this.$refs.girl.offsetLeft;
      this.moveDataelse.y = e.pageY - this.$refs.girl.offsetTop;
      e.currentTarget.style.cursor = 'move';
      window.onmousemove = this.mouseMoveHandleelse;
    },
    mouseMoveHandleelse(e) {
      const moveLeft = `${e.pageX - this.moveDataelse.x}px`;
      const moveTop = `${e.pageY - this.moveDataelse.y}px`;
      this.$refs.girl.style.left = moveLeft;
      this.$refs.girl.style.top = moveTop;
    },
    mouseUpHandleelse(e) {
      window.onmousemove = null;
      e.currentTarget.style.cursor = 'move';
    }
  }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.girl-c {
    position: fixed;
    left: 20px;
    top: 10px;
}
.girl-pic {
    width: auto;
    height: 200px;
}
.girl-main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
