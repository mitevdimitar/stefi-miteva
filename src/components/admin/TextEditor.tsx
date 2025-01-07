import { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'draft-js/dist/Draft.css';
import { createContentFromValue } from '../../utils/textEditor';

type StoryEditorProps = {
  value: string; // HTML markup
  onTextChange: (text: string) => void;
};

function StoryEditor({ value, onTextChange }: StoryEditorProps) {
  const [editorState, setEditorState] = useState(
    value ? createContentFromValue(value) : EditorState.createEmpty()
  );

  const onChange = (state: EditorState) => {
    const rawContentState = convertToRaw(state.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    onTextChange(markup);
    setEditorState(state);
  };

  return (
    <Editor editorState={editorState} onChange={onChange} placeholder="Текст" />
  );
}

export default StoryEditor;
