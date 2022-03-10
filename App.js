import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BangImage from "./assets/selfies/bang1.jpg";
import Avatar from "./assets/icons/avatar.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>업로드된 사진들</Text>
      <View style={styles.selfieCard}>
        <Image style={styles.selfieImage} source={BangImage} />
      </View>
      <View style={styles.selfieContents}>
        <Text style={styles.selfieName}>풀뱅 빠밤</Text>
        <Text style={styles.selfiePrice}>날씨 : 햇빛 쨍쨍</Text>
        <View style={styles.selfieFooter}>
          <View style={styles.flexDirection}>
            <Image style={styles.selfieAvatar} source={Avatar} />
            <Text style={selfieSellerName}>그랩</Text>
          </View>
          <Text style={selfieDate}>3분 전</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
  },
  selfieCard: {
    width: 320,
    borderColor: "rpg(230, 230, 230)",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "white",
  },
  selfieImage: {
    width: "100%",
    height: 210,
  },
  selfieContents: {
    padding: 8,
  },
  selfieSeller: {
    flexDirection: "row",
    alignItems: "center",
  },
  selfieAvatar: {
    width: 24,
    height: 24,
  },
  selfieFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  SelfieName: {
    fontSize: 16,
  },
  selfiePrice: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  selfieSellerName: {
    fontSize: 16,
  },
  selfieDate: {
    fontSize: 16,
  },
});
