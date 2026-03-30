import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Produtos() {
  const [mensagem, setMensagem] = useState("");

  const [qtd1, setQtd1] = useState(1);
  const [qtd2, setQtd2] = useState(1);
  const [qtd3, setQtd3] = useState(1);
  const [qtd4, setQtd4] = useState(1);
  const [qtd5, setQtd5] = useState(1);

  return (
    <ScrollView style={styles.container}>
      
      {/* PRODUTO 1 */}
      <View style={styles.card}>
        <Image source={require("../../../assets/notebook.jpg")} style={styles.img} />
        <Text style={styles.nome}>Notebook Gamer</Text>
        <Text>R$ 3500</Text>
        <Text style={styles.pix}>PIX: R$ 3150</Text>

        <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 > 1 ? qtd1 - 1 : 1)}>
            <Text style={styles.btn}>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Adicionar ao carrinho"
          onPress={() =>
            setMensagem(`${qtd1}x Notebook Gamer adicionado ao carrinho`)
          }
        />
      </View>

      {/* PRODUTO 2 */}
      <View style={styles.card}>
        <Image source={require("../../../assets/produtos/celular.jpg")} style={styles.img} />
        <Text style={styles.nome}>Smartphone</Text>
        <Text>R$ 2000</Text>
        <Text style={styles.pix}>PIX: R$ 1800</Text>

        <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQtd2(qtd2 > 1 ? qtd2 - 1 : 1)}>
            <Text style={styles.btn}>-</Text>
          </TouchableOpacity>

          <Text>{qtd2}</Text>

          <TouchableOpacity onPress={() => setQtd2(qtd2 + 1)}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Adicionar ao carrinho"
          onPress={() =>
            setMensagem(`${qtd2}x Smartphone adicionado ao carrinho`)
          }
        />
      </View>

      {/* PRODUTO 3 */}
      <View style={styles.card}>
        <Image source={require("../../../assets/produtos/fone.jpg")} style={styles.img} />
        <Text style={styles.nome}>Fone Bluetooth</Text>
        <Text>R$ 250</Text>
        <Text style={styles.pix}>PIX: R$ 225</Text>

        <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQtd3(qtd3 > 1 ? qtd3 - 1 : 1)}>
            <Text style={styles.btn}>-</Text>
          </TouchableOpacity>

          <Text>{qtd3}</Text>

          <TouchableOpacity onPress={() => setQtd3(qtd3 + 1)}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Adicionar ao carrinho"
          onPress={() =>
            setMensagem(`${qtd3}x Fone Bluetooth adicionado ao carrinho`)
          }
        />
      </View>

      {/* PRODUTO 4 */}
      <View style={styles.card}>
        <Image source={require("../../../assets/produtos/mouse.jpg")} style={styles.img} />
        <Text style={styles.nome}>Mouse Gamer</Text>
        <Text>R$ 150</Text>
        <Text style={styles.pix}>PIX: R$ 135</Text>

        <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQtd4(qtd4 > 1 ? qtd4 - 1 : 1)}>
            <Text style={styles.btn}>-</Text>
          </TouchableOpacity>

          <Text>{qtd4}</Text>

          <TouchableOpacity onPress={() => setQtd4(qtd4 + 1)}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Adicionar ao carrinho"
          onPress={() =>
            setMensagem(`${qtd4}x Mouse Gamer adicionado ao carrinho`)
          }
        />
      </View>

      {/* PRODUTO 5 */}
      <View style={styles.card}>
        <Image source={require("../../../assets/produtos/teclado.jpg")} style={styles.img} />
        <Text style={styles.nome}>Teclado Mecânico</Text>
        <Text>R$ 300</Text>
        <Text style={styles.pix}>PIX: R$ 270</Text>

        <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQtd5(qtd5 > 1 ? qtd5 - 1 : 1)}>
            <Text style={styles.btn}>-</Text>
          </TouchableOpacity>

          <Text>{qtd5}</Text>

          <TouchableOpacity onPress={() => setQtd5(qtd5 + 1)}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Adicionar ao carrinho"
          onPress={() =>
            setMensagem(`${qtd5}x Teclado Mecânico adicionado ao carrinho`)
          }
        />
      </View>

      {mensagem !== "" && <Text style={styles.msg}>{mensagem}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
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
    gap: 15,
    marginVertical: 10,
  },
  btn: {
    fontSize: 20,
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  msg: {
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
});