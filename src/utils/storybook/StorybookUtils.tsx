import React, { Suspense } from 'react';
import { storiesOf } from '@storybook/react';

export interface SbStory {
    label: string;
    content: any;
}

interface DisplayStoriesOptions {
    title: string;
    subtitle?: string;
    stories: SbStory[];
    eltForProps?: JSX.Element;
}

export function displayStories({ title, subtitle, stories, eltForProps }: DisplayStoriesOptions) {
    const storiesOfResult = storiesOf('Composants', module);

    if (eltForProps) {
        storiesOfResult.addDecorator((storyFn) => {
            return (
                <div key={title}>
                    <Suspense fallback={<h1>Chargement...</h1>}>{storyFn()}</Suspense>
                </div>
            );
        });
    }
    storiesOfResult.add(title, () => (
        <div>
            {title && <div className="title mb-3">{title}</div>}
            {subtitle && <div className="subtitle mb-3">{subtitle}</div>}
            {stories.map((story, index) => (
                <div key={index}>
                    <div className="columns">
                        <div className="column is-3 has-text-black">{story.label} :</div>
                        <div className="column">{story.content}</div>
                    </div>
                </div>
            ))}
        </div>
    ));
}
