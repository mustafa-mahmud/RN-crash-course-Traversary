import { View, Text, FlatList } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  ///////////////////////////////////////////////////
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <NoteItem note={item} />;
      }}
    />
  );
};

export default NoteList;
