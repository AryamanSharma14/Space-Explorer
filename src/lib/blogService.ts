import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  orderBy, 
  query,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Updated interface to match your existing blog data structure
export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  image?: string;
  // Firebase specific fields
  timestamp?: Timestamp | Date;
  createdAt?: Timestamp | Date;
  updatedAt?: Timestamp | Date;
  author?: string; // Optional for Firebase posts
}

const COLLECTION_NAME = 'blogPosts';

export const blogService = {
  // Create new blog post
  async createPost(postData: Omit<BlogPost, 'id' | 'timestamp' | 'createdAt'>) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...postData,
        timestamp: new Date(),
        createdAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating post: ', error);
      throw error;
    }
  },

  // Read all blog posts (combines Firebase + static data)
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const firebasePosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));
      
      return firebasePosts;
    } catch (error) {
      console.error('Error getting posts: ', error);
      return []; // Return empty array if Firebase fails
    }
  },

  // Update blog post
  async updatePost(id: string, updateData: Partial<BlogPost>) {
    try {
      const postRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(postRef, {
        ...updateData,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating post: ', error);
      throw error;
    }
  },

  // Delete blog post
  async deletePost(id: string) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error('Error deleting post: ', error);
      throw error;
    }
  }
};
