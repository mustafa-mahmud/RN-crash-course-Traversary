import { View, Text } from 'react-native';

const NoteItem = ({ note, index }) => {
  ///////////////////////////////////////////////////
  return (
    <View className="bg-royalGreen p-2 mb-3" key={index}>
      <Text className="text-[13px] font-rRegular">{note.text}</Text>
    </View>
  );
};

export default NoteItem;
