import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@components/Common/Button';

storiesOf('Button', module).add('with text', () => {
  return <Button
      color="primary"
      rounded
      onClick={action('button-click')}
    >
      Primary
    </Button>;
});
