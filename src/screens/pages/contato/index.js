import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contato</Text>

      <Text>📞 Telefone: (19) 997106-0607</Text>
      <Text>💬 WhatsApp: (19) 92345-7892</Text>
      <Text>📍 Endereço: Rua Douglas costa, 123 - SP</Text>
      <Text>🏢 CNPJ: 10.987.654/0001-02</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
});