import {CreateExpe} from './CreateExpe';
import { displayStories, SbStory } from '../../utils/storybook/StorybookUtils';

const stories: SbStory[] = [
    {
        label: 'Default',
        content: (
            <CreateExpe onSubmit={() => Promise.resolve()}/>
        ),
    }
]

displayStories({
    title: 'CreateExpe',
    stories,
});
