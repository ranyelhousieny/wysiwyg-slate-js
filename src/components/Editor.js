import { Editor } from 'slate';

import React from 'react';

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'A line of text in a paragraph.',
      },
    ],
  },
];

const Editor = () => {
  return <div>Editor</div>;
};

export default Editor;
