import { action } from '@storybook/addon-actions';

import PreviewExpe from './PreviewExpe';
import { displayStories, SbStory } from '../../utils/storybook/StorybookUtils';
import { expe1, expe3, expe4 } from '../../data-for-test';

const stories: SbStory[] = [
    {
        label: 'Exemples',
        content: (
            <div>
                <PreviewExpe expedition={expe3} onExpeditionClicked={action('Clic expe3')} />
                <PreviewExpe expedition={expe1} onExpeditionClicked={action('Clic expe1')} />
                <PreviewExpe expedition={expe4} onExpeditionClicked={action('Clic expe4')} />
            </div>
        ),
    },
];

displayStories({
    title: 'PreviewExpe',
    stories,
});
