import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  //////////////////////////////////////
  return (
    <View className="flex-1 justify-center items-center p-2">
      <Image
        source={require('./../assets/images/post-it.png')}
        className="w-[100px] h-[100px]"
      />
      <Text className="font-rBold text-[16px]">Welcome to Notes App</Text>
      <Text
        className="font-rRegular text-[13px] text-center mt-3 w-full
			"
      >
        Capture yout thoght anywhere, anytime
      </Text>

      <TouchableOpacity
        className="w-full bg-royalBlue p-[10px] mt-3 rounded-md"
        onPress={() => router.push('/notes')}
      >
        <Text className="text-white text-center font-rRegular">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
