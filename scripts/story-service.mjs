import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase.mjs';

export const getPublishedStorySlugs = async () => {
  try {
    const newQuery = query(
      collection(db, 'stories'),
      where('status', '==', 'publish')
    );

    const documentSnapshot = await getDocs(newQuery);
    const slugs = documentSnapshot.docs.map((doc) => doc.data().slug);
    return slugs.filter((slug) => slug !== undefined);
  } catch (error) {
    console.error('Error fetching story slugs:', error);
    return [];
  }
};
