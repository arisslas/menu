import { html } from 'lit';
import '../src/my-menu.js';

export default {
  title: 'MyMenu',
  component: 'my-menu',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-menu
      style="--my-menu-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-menu>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
