import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Home', () => {
  it('renders an empty basket', () => {
    render(<Home />);

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });

    expect(basketButton).toHaveTextContent(/^Basket: 0 items$/i);
  });

  it('renders a basket with 1 item', async () => {
    render(<Home />);

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });
    const addToBasketElements = screen.getAllByLabelText('Add to basket');

    await userEvent.click(addToBasketElements[0]);

    expect(basketButton).toHaveTextContent(/Basket: 1 item$/);
  });

  it('renders a basket with 1 of item 1 and 2 of item 2', async () => {
    render(<Home />);

    const basketButton = screen.getByRole('button', {
      name: /Basket:/i,
    });
    const addToBasketElements = screen.getAllByLabelText('Add to basket');

    await userEvent.click(addToBasketElements[0]);
    await userEvent.click(addToBasketElements[1]);
    await userEvent.click(addToBasketElements[1]);
    await userEvent.click(basketButton);

    const itemCountList = screen.getAllByRole('list');

    const itemCountElements = within(itemCountList[0]).getAllByRole('listitem');

    expect(itemCountElements).toHaveLength(4);
    expect(itemCountElements[0]).toHaveTextContent('Item 1 count: 1');
    expect(itemCountElements[1]).toHaveTextContent('Item 2 count: 2');
  });
});
