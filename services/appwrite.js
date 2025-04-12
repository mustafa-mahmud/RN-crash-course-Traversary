import { Client, Databases } from 'react-native-appwrite';
import { Platform } from 'react-native';

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID,
  },
};

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId);

switch (Platform.OS) {
  case 'ios':
    client.setPlatform(config.endpoint);
    break;
  case 'android':
    client.setPlatform(config.projectId);
    break;
}

const database = new Databases(client);

export { database, config, client };
