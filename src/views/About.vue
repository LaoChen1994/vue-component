<template>
  <div class="about">
    <div class="about-tabbar">
      <top-tabber
        :tabTitle="item.tabTitle"
        :selection="item.selection"
        v-for="(item, index) in tabberInfo"
        :key="index"
        class="about-tabber-item"
      ></top-tabber>
    </div>
    <div class="about-process">
      <process-bar ref="processBar" :pbData="pbData"></process-bar>
      <button @click="nextProcess" class="nextBtn">下一步</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import topTabber from '../components/topTabber'
import processBar from '../components/processBar'
export default {
  data() {
    return {
      tabberInfo: [
        { tabTitle: '选择水果', selection: ['苹果', '香蕉', '李子'] },
        { tabTitle: '选择蔬菜', selection: ['白菜', '冬瓜', '土豆丝'] },
        { tabTitle: '选择肉类', selection: ['猪肉', '牛肉', '鸡肉'] }
      ],
      pbData: [
        { process: '步骤1', icon: 'gou' },
        { process: '步骤2', icon: 'gou' },
        { process: '步骤3', icon: 'gou' },
        { process: '步骤4', icon: 'gou' },
        { process: '步骤5', icon: 'gou' }
      ]
    }
  },
  components: {
    topTabber,
    processBar
  },
  mounted() {
    let jse = new this.$jsencrypt.JSEncrypt()
    console.log(jse)
  },
  methods: {
    nextProcess() {
      this.$refs.processBar.processLift()
    }
  }
}
</script>

<style lang="scss">
.about {
  &-tabbar {
    display: inline-block;
    width: 800px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    &-item {
      width: 60px;
    }
  }
  &-process {
    width: 80%;
    margin: 0 auto;
  }
}
.nextBtn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  background: rgb(5, 135, 235);
  color: white;
  border: 1px solid rgb(5, 135, 235);
  transition: all 0.5s ease 0.25s;
}

.nextBtn:hover {
  color: rgb(5, 135, 235);
  background: white;
  border: 1px solid rgb(5, 135, 235);
}
</style>
