import { mount } from 'vue-test-utils'
import Errors from '@/components/ListErrors.vue'

describe('ListErrors.vue', () => {
  const example = {
    errors: {
      "title":["can't be blank"],
      "body":["can't be blank"]
    }
  }
  const wrap = (props) => {
    return mount(Errors, { propsData: props })
  }

  it('compiles', () => {
    const wrapper = wrap(example)
    wrapper.isVueInstance().should.be.true
  })

  it('renders the correct message', () => {
    const wrapper = wrap(example)
    wrapper.html().should.contain('title')
  })
})
