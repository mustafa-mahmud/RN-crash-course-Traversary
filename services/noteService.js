import databaseService from './dbService';
import { ID } from 'react-native-appwrite';

const dbId = process.env.EXPO_PUTLIC_APPWIRTE_NOTES_DATABASE_ID;
const colId = process.env.EXPO_PUTLIC_APPWIRTE_NOTES_COLLECTION_ID;

const noteService = {
  //get notes
  async getNotes() {
    try {
      const response = await databaseService?.listDocuments(dbId, colId);
      console.log(response);

      if (response?.error) {
        return {
          error: response?.error,
        };
      }

      return {
        data: response || [],
      };
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default noteService;
