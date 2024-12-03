import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
  where,
  addDoc,
} from 'firebase/firestore';
import { db } from '../services/firebase';

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

export const createStory = async (story: any): Promise<any> => {
  const created = await addDoc(collection(db, 'stories'), story);
  console.log({ created });
  return { id: created.id, ...story };
};
