import { fireEvent, render, screen } from '@testing-library/react';

import PreviewExpe from './PreviewExpe';

import { expe1 } from '../../data-for-test';


describe('Test PreviewExpe component', () => {
    it('should call callback on click', () => {
        const mockCallBack = jest.fn();
        render(
            <PreviewExpe
                expedition={expe1}
                onExpeditionClicked={mockCallBack}
            />
        );

        fireEvent.click(screen.getByText(expe1.name));

        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
});
