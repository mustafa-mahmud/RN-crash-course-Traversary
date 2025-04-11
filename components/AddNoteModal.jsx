import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';

const AddNoteModal = ({
  setModalVisible,
  modalVisible,
  setNewNote,
  addNote,
}) => {
  ///////////////////////////////////////////////////
  return (
    <Modal
      statusBarTranslucent
      className="absolute"
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setModalVisible(true)}
    >
      <View className="justify-center items-center flex-1 bg-black/50">
        <View className="bg-white w-4/5 rounded-md p-3">
          <Text className="text-center font-uDog mb-4">Add a New Note</Text>
          <TextInput
            className="bg-black/10 rounded-md font-uDog mb-3"
            placeholder="Enter note..."
            placeholderTextColor={'#aaaaaa'}
            onChangeText={setNewNote}
          />

          <View className="flex-row justify-between gap-2">
            <TouchableOpacity
              className="flex-grow bg-gray-400 mt-2 p-2 rounded-md"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-center color-white font-[10px] font-uDog">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-grow bg-royalBlue mt-2 p-2 rounded-md"
              onPress={addNote}
            >
              <Text className="text-center color-white font-[10px] font-uDog">
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;
