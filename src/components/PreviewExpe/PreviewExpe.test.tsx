import { fireEvent, render, screen } from '@testing-library/react';

import PreviewExpe from './PreviewExpe';

import { expe1 } from '../../data-for-test';

describe('Test PreviewExpe component', () => {
    it('', function () {
        const callback = jest.fn();

        render(<PreviewExpe expedition={expe1} onExpeditionClicked={callback} />);

        screen.getByText(expe1.name).click();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
