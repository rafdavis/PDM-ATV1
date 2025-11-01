import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";
import {
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 20,
          width: "100%",
        }}
      >
        <Image
          source="https://github.com/rafdavis.png"
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "#fff",
          }}
        />
        <Text
          style={{
            fontSize: 28,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Ricardo Davis
        </Text>
        <View style={{ width: "80%" }}>
          <Button
            title="Abrir GitHub"
            color={"#1d1d1d"}
            onPress={(e) => {
              e.preventDefault();
              WebBrowser.openBrowserAsync("https://github.com/rafdavis");
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("TouchableOpacity", "Você clicou no botão!")
          }
          style={{
            backgroundColor: "#1E88E5",
            paddingVertical: 12,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
            TouchableOpacity
          </Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => console.log("Clicou no botão")}
          onLongPress={() => console.warn("Segurou no botão")}
          onPressOut={() => console.log("Largou do botão")}
          delayLongPress={2000}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#4CAF50" : "#8BC34A",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 3,
            elevation: 3,
          })}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
            Pressable
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
