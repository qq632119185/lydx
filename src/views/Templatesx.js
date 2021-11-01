import { createApp, h } from 'vue'
import xhrx from '../untils/xhrx.js'
const renderObject = {
  render(props) {
    return h('div', {}, 'this.hi')
  }
}
function renderFunction(props, context) {
  return h('div', {}, 'this.hi')
}
class renderClass {
  render(props) {
    return h('div', {}, 'this.hi')
  }
}
const renderClassx = new renderClass()
export {
  renderObject,
  renderFunction,
  renderClassx
}