// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(event) {
      // console.log('---------', event);
      // 1.取出index
      const index = event.currentTarget.dataset.index;
      // 2.修改currentIndex
      this.setData({
        currentIndex : index
      })
      // 3.通知页面，关于内部组件的点击事件
      this.triggerEvent('itemclick', {index, title: this.properties.title[index]}, {})
    }

  }
})
