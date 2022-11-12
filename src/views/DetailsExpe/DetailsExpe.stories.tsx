import { DetailsExpe } from './DetailsExpe';
import { displayStories, SbStory } from '../../utils/storybook/StorybookUtils';
import { expe1 } from '../../data-for-test';

const stories: SbStory[] = [
    {
        label: 'Default',
        content: <DetailsExpe expedition={expe1} />,
    },
    {
        label: 'Without expe',
        content: <DetailsExpe />,
    },
];

displayStories({
    title: 'DetailsExpe',
    stories,
});
