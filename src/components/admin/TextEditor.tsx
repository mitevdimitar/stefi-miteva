import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

type StoryEditorProps = {
  value: string;
  onTextChange: (text: string) => void;
};

function StoryEditor({ value, onTextChange }: StoryEditorProps) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  //TODO: Set the value in state, so it can be passed to the editor
  console.log({ value });

  const onChange = (content: any) => {
    const rawContentState = convertToRaw(content.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    onTextChange(markup);
    setEditorState(content);
  };

  return (
    <Editor editorState={editorState} onChange={onChange} placeholder="Текст" />
  );
}

export default StoryEditor;
