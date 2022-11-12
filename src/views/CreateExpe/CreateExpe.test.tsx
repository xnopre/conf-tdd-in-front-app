import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CreateExpe } from './CreateExpe';

describe('Test CreateExpe component', () => {
    it('should call callback with expe name on submit', () => {
        const mockCallBack = jest.fn();
        render(<CreateExpe onSubmit={mockCallBack} />);

        fireEvent.change(screen.getByTestId('name'), {
            target: { value: 'Bivouac Bauges' },
        });
        userEvent.selectOptions(screen.getByTestId('level'), 'Facile');
        fireEvent.change(screen.getByTestId('country'), {
            target: { value: 'France' },
        });
        fireEvent.change(screen.getByTestId('placesCount'), {
            target: { value: '5' },
        });
        fireEvent.click(screen.getByText('Créer'));

        expect(mockCallBack).toHaveBeenCalledTimes(1);
        expect(mockCallBack).toHaveBeenCalledWith('Bivouac Bauges', 'Facile', 'France', 5);
    });
});
