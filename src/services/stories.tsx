import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
  where,
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { Story } from '../utils/types';

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
