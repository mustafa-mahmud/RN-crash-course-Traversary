import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import NoteList from '../../components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
import noteService from './../../services/noteService.js';

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function addNote() {
    if (newNote.trim() === '') return;

    setNotes((ps) => [...ps, { id: Date.now().toString(), text: newNote }]);
    setNewNote('');
    setModalVisible(false);
  }

  async function fetchNotes() {
    setLoading(true);

    try {
      const response = await noteService?.getNotes();
      console.log(response, 123456);

      if (response?.error) {
        setError(response?.error);
        Alert.alert('Error', response?.error);
      } else {
        setError(null);
      }
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    console.log(123);

    fetchNotes();
  }, []);

  ///////////////////////////////////////////////////
  return (
    <View className="flex-1">
      <NoteList notes={notes} />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bg-royalBlue bottom-1 w-full p-3 rounded-md"
      >
        <Text className="color-white text-center text-[13px]">+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

export default NoteScreen;
