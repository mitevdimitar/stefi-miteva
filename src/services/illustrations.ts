import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
import { Illustration } from '../types';

export const getStorageIllustrations = async () => {
  const listRef = ref(storage, 'illustrations');
  let fetchedIllustrations: Illustration[] = [];
  try {
    const result = await listAll(listRef);
    const promises = result.items.map(async (itemRef, i) => {
      const url = await getDownloadURL(itemRef);
      const illustration = {
        img: url,
        title: `illustration${i}`,
      };
      return illustration;
    });
    fetchedIllustrations = await Promise.all(promises);
    fetchedIllustrations.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
  } catch (err) {
    console.log({ err });
  }
  return fetchedIllustrations;
};

export const uploadStoryImage = async (file: File, authorUid: string) => {
  const storageRef = ref(storage, `story-images/${file.name}`);
  const metadata = {
    customMetadata: {
      author_uid: authorUid,
    },
  };
  await uploadBytes(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
