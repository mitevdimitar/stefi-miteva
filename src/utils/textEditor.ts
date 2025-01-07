import { EditorState, ContentState, convertFromHTML } from 'draft-js';

export const createContentFromValue = (value: string) => {
  const blocksFromHTML = convertFromHTML(value);
  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  return EditorState.createWithContent(contentState);
};
