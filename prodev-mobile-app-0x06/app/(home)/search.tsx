import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Search = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View>
        <Text className="text-red-600 text-5xl">Search Screen</Text>
      </View>
      </SafeAreaView>
      </SafeAreaProvider>
  )
}

export default Search;
