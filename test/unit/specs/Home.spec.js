import Vue from 'vue'
import Hello from '@/views/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()

    let value = vm.$el.querySelector('.logo-font').textContent
    expect(value).to.equal('conduit')
  })
})
