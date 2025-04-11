import { database } from './appwrite';

const databaseService = {
  //read doc
  async listDocuments(dbId, colId) {
    try {
      const response = await database?.listDocuments(dbId, colId);
      console.log(response);

      return response?.documents || [];
    } catch (error) {
      console.error('Error===========', error);

      return {
        error: error?.message,
      };
    }
  },
};

export default databaseService;
