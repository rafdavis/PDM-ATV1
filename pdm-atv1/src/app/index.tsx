import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";
import {
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Pressable
} from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
        <Image
          source="https://github.com/rafdavis.png"
          style={{ width: 100, height: 100, borderRadius: 99 }}
        />
        <Text style={{ fontSize: 32 }}>Ricardo Davis</Text>
        <Button
          title="Gitbub"
          color={"#1d1d1d"}
          onPress={(e) => {
            e.preventDefault();
            WebBrowser.openBrowserAsync("https://github.com/rafdavis");
          }}
        />
        <TouchableOpacity
          onPress={() =>
            Alert.alert("TouchableOpacity", "Você clicou no botão!")
          }
          style={{
            backgroundColor: "#1E88E5",
            padding: 12,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>TouchableOpacity</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => console.log("Clicou no botão")}
          onLongPress={() => console.warn("Segurou no botão")}
          onPressOut={() => console.log("Largou do botão")}
          delayLongPress={2000}>
          <Text>Pressable</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
