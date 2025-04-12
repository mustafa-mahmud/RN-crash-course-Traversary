import { database } from './appwrite';

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const databaseService = {
  //read documents
  async listDocuments() {
    try {
      const response = await database.listDocuments(dbId, colId);

      return response.documents || [];
    } catch (error) {
      console.error('Error fetching documents', error.message);

      return { error: error.message };
    }
  },
};

export default databaseService;
