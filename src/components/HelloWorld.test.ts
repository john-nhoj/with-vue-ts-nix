import HelloWorld from './HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
  const setup = () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello, world!',
      },
    });
    return { wrapper };
  };
  it('renders correctly', () => {
    const { wrapper } = setup();
    expect(wrapper.find('[data-testid="hello-world"]').text()).toBe('Hello, world!');
  });
});
