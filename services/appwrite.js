import { Client, Databases } from 'react-native-appwrite';
import { Platform } from 'react-native';

const config = {
  endpoint: process.env.EXPO_PUTLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  dbId: process.env.EXPO_PUTLIC_APPWIRTE_NOTES_DATABASE_ID,
  col: {
    notes: process.env.EXPO_PUTLIC_APPWIRTE_NOTES_COLLECTION_ID,
  },
};

const client = new Client()
  .setEndpoint(config?.endpoint)
  .setProject(config?.projectId);

if (Platform.OS === 'ios') {
  client.setPlatform(
    process.env.EXPO_PUTLIC_APPWIRTE_NOTES_ANDROID_PAKAGE_NAME
  );
}

if (Platform.OS === 'android') {
  client.setPlatform(process.env.EXPO_PUTLIC_APPWIRTE_NOTES_IOS_PAKAGE_NAME);
}

const database = new Databases(client);
export { database, config, client };
