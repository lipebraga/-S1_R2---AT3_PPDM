import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

const produtos = [
  {
    id: "1",
    nome: "Notebook Gamer",
    preco: 3500,
    imagem: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    nome: "Smartphone",
    preco: 2000,
    imagem: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    nome: "Fone Bluetooth",
    preco: 250,
    imagem: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    nome: "Mouse Gamer",
    preco: 150,
    imagem: "https://via.placeholder.com/100",
  },
  {
    id: "5",
    nome: "Teclado Mecânico",
    preco: 300,
    imagem: "https://via.placeholder.com/100",
  },
];

export default function Produtos() {
  const [mensagem, setMensagem] = useState("");
  const [quantidades, setQuantidades] = useState({});

  const alterarQuantidade = (id, tipo) => {
    setQuantidades((prev) => {
      const atual = prev[id] || 1;

      if (tipo === "mais") {
        return { ...prev, [id]: atual + 1 };
      } else {
        return { ...prev, [id]: atual > 1 ? atual - 1 : 1 };
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const quantidade = quantidades[item.id] || 1;

          return (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.img} />

              <Text style={styles.nome}>{item.nome}</Text>

              <Text>Preço: R$ {item.preco}</Text>

              <Text style={styles.pix}>
                PIX: R$ {(item.preco * 0.9).toFixed(2)}
              </Text>

              {/* Controle de quantidade */}
              <View style={styles.qtdContainer}>
                <TouchableOpacity
                  style={styles.btnQtd}
                  onPress={() => alterarQuantidade(item.id, "menos")}
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text>{quantidade}</Text>

                <TouchableOpacity
                  style={styles.btnQtd}
                  onPress={() => alterarQuantidade(item.id, "mais")}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>

              <Button
                title="Adicionar ao carrinho"
                onPress={() =>
                  setMensagem(
                    `${quantidade}x ${item.nome} adicionado ao carrinho`
                  )
                }
              />
            </View>
          );
        }}
      />

      {mensagem !== "" && <Text style={styles.msg}>{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
  pix: {
    color: "green",
    marginBottom: 10,
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  btnQtd: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
  },
  msg: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
});