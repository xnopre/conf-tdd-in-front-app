import {ListExpe} from './ListExpe';
import { displayStories, SbStory } from '../../utils/storybook/StorybookUtils';
import { listExpe1 } from '../../data-for-test';


const stories: SbStory[] = [
    {
        label: 'Default',
        content: (
            <ListExpe expeditions={listExpe1} onExpeditionClicked={() => {}} />
        ),
    },
    {
        label: 'Liste Vide',
        content: (
            <ListExpe expeditions={[]} onExpeditionClicked={() => {}} />
        ),
    }
]

displayStories({
    title: 'ListExpe',
    stories,
});
