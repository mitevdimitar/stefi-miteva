import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
  where,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { Story } from '../types';

export const getFirebaseStories = async (lastVisible: any) => {
  const newQuery = lastVisible
    ? query(
        collection(db, 'stories'),
        where('status', '==', 'publish'),
        orderBy('status', 'desc'),
        orderBy('date_created', 'desc'),
        startAfter(lastVisible),
        limit(9)
      )
    : query(
        collection(db, 'stories'),
        where('status', '==', 'publish'),
        orderBy('status', 'desc'),
        orderBy('date_created', 'desc'),
        limit(10)
      );

  const documentSnapshot = await getDocs(newQuery);
  return documentSnapshot;
};

export const getStoryBySlug = async (slug: string) => {
  const q = query(
    collection(db, 'stories'),
    where('status', '==', 'publish'),
    where('slug', '==', slug)
  );

  const querySnapshot = await getDocs(q);
  let matchedStory: any = null;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    matchedStory = doc.data();
  });
  return matchedStory;
};

export const createStory = async (
  story: Story
): Promise<{ id: string } & Story> => {
  const created = await addDoc(collection(db, 'stories'), story);
  return { id: created.id, ...story };
};

export const editStory = async (
  id: string,
  updatedStory: Partial<Story>
): Promise<{ id: string } & Partial<Story>> => {
  const storyRef = doc(db, 'stories', id);
  await updateDoc(storyRef, updatedStory);
  return { id, ...updatedStory };
};
