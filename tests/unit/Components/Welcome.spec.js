import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Welcome from '@/components/Welcome.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const welcomeText = 'Welcome text'

const wrapper = shallowMount(Welcome, {
  localVue,
  propsData: {
    welcomeText: welcomeText
  }
})
describe('Welcome.vue', () => {
  it('prop welcomeText work', () => {
    expect(wrapper.props().welcomeText).toBe(welcomeText)
  })

  it('rendering welcome message', () => {
    expect(wrapper.text()).toMatch(welcomeText)
  })

  it('rendering router link to app', () => {
    expect(wrapper.contains('router-link')).toBe(true)
  })
})
