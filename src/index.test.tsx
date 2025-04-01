import { render, screen } from '@testing-library/react';
import { DomlintUi } from '.';

describe('DomlintUi', () => {
  it('render', async () => {
    render(<DomlintUi>foobar</DomlintUi>);
    await screen.findByText('foobar');
  });
});
