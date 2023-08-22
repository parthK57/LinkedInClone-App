import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import Icons from "react-native-vector-icons/Ionicons";

const Header: React.FC = () => {
  const ProfileImage = useSelector(
    (state: any) => state.user.value.profile_image
  ) as string;
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <View
      style={styles.shadow}
      className="flex-row items-center justify-between w-full px-5 py-2 bg-white"
    >
      <TouchableOpacity>
        <Image
          source={{ uri: ProfileImage }}
          resizeMode="contain"
          className="w-9 h-9 rounded-full"
        />
      </TouchableOpacity>
      <TextInput
        className="w-[72%] rounded-md px-4 py-1 bg-slate-100 font-medium text-base"
        placeholder="Search"
        onChangeText={(text) => setSearchInput(text)}
      ></TextInput>
      <TouchableOpacity>
        <Icons name="chatbubble-ellipses-sharp" color="gray" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default Header;
