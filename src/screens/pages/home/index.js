import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.logo}
      />

      <Text style={styles.title}>AKI Tem</Text>

      <Text style={styles.desc}>
        Somos uma empresa fictícia especializada em tecnologia e inovação.
      </Text>

      <View style={styles.buttons}>
        <Button
          title="Ver Produtos"
          onPress={() => navigation.navigate("Produtos")}
        />

        <Button
          title="Contato"
          onPress={() => navigation.navigate("Contato")}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    marginVertical: 15,
  },
  buttons: {
    gap: 10,
    width: "100%",
  },
});