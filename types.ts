import type * as React from 'react';
import type { SectionKey } from './constants';

export interface Section {
  id: SectionKey;
  title: string;
  emoji: string;
  // FIX: Used React.ReactElement instead of JSX.Element to avoid issues with the JSX namespace not being found.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  component: React.FC;
}

export interface Sections {
  [key: string]: Section;
}
