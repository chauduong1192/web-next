import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@components/Common/Button';

storiesOf('Button', module).add('with text', () => {
  return <Button
      color="primary"
      rounded
    >
      Primary
    </Button>;
});
