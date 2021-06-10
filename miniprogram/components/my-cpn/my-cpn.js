// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是默认的值！',
      // 监听属性的变化
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    }
  },
   // 外部样式类 即将外部样式(home中的样式)传递给my-cpn
   externalClasses: ['title-style'],

  /**
   * 组件的初始数据
   */
  data: {
    title: '我才是自定义组件，哈哈哈！'
  },
  methods: {
    handerIncreament() {
      this.triggerEvent('increament', {}, {})
    }
  }
})