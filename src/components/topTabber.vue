<template>
  <div class="ttb">
    <div class="wrapper">
      <div class="ttb-title" @click.stop="selectionShow">
        <div class="ttb-title-text">{{ tabTitle }}</div>
        <div class="ttb-title-arrow"></div>
      </div>
      <div
        class="ttb-selection"
        :class="showSelection ? 'showSelection' : ''"
        @mouseleave="selectionClose"
      >
        <div
          class="ttb-selection-item"
          v-for="(item, index) in selection"
          :key="index"
          :class="index === curr ? 'active' : ''"
          @mouseenter="selectionHover(index)"
          @click.stop="selectionChoose(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="ttb-content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showSelection: false,
      curr: -1
    }
  },
  props: {
    tabTitle: {
      type: String,
      required: true
    },
    selection: {
      type: Array
    }
  },
  methods: {
    selectionShow() {
      this.showSelection = true
    },
    selectionHover(index) {
      this.curr = index
      // console.log(this.showSelection);
    },
    selectionChoose(item) {
      this.tabTitle = item
      this.selectionClose()
    },
    selectionClose() {
      console.log(this.showSelection)
      this.showSelection = false
      this.curr = -1
      console.log(this.showSelection)
      console.log('selection is closed')
    }
  },
  computed: {
    showType() {
      return this.$store.state.appClick
    }
  },
  watch: {
    showType: {
      handler(newV, oldV) {
        console.log('newV=', newV)
        console.log('oldV=', oldV)
        let showSelection
        if (newV) {
          showSelection = false
        }
        this.selectionClose()
        this.$store.dispatch('reset')
      }
    }
  }
}
</script>

<style lang="scss">
@import "../style/mixin.sass";

.ttb {
  width: 100%;
  &-title {
    border-bottom: 1px solid rgb(138, 138, 138);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &-arrow {
      display: inline-block;
      @include downArrow(10px, rgb(138, 138, 138));
      position: absolute;
      top: 10px;
      right: 10px;
    }
    &-text {
      font-size: 20px;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      width: 100%;
      text-align: center;
    }
  }
  &-content {
    width: 100%;
    height: 300px;
    background: red;
    margin-top: 10px;
  }
  &-selection {
    background: rgba(238, 238, 238, 0.8);
    width: 100%;
    border: 1px solid rgb(135, 135, 135);
    border-top: 0;
    position: absolute;
    top: 20px;
    left: 0;
    transform-origin: 0 0;
    transition: all 0.5s;
    transform: scaleY(0);
    // background: white;
    display: flex;
    flex-direction: column;
    &-item {
      flex: 1;
      padding: 10px 0;
    }
    .active {
      background: white;
    }
    &.showSelection {
      transform: scaleY(1);
    }
  }
}
.wrapper {
  position: relative;
}
</style>
