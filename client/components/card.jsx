import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

import toRupiah from "../helpers/toRupiah";

export default function CardItem({ data }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.cardContainer}
            onPress={() =>
                navigation.navigate("Details", {
                    id: data.id,
                })
            }
        >
            <Card >
                <Card.Cover
                    source={{
                        uri: data.mainImg,
                    }}
                    style={styles.cardCover}
                />
                <Card.Content
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 123,
                    }}
                >
                    <Title style={styles.title}>{data.name}</Title>
                    <Paragraph style={styles.paragraph}>{toRupiah(data.price)}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 350,
        width: 200,
        marginBottom: 10,
        marginHorizontal: 3.1,
        justifyContent: "center",
        alignItems: "center"
    },

    cardCover: {
        height: 250,
        width: 200,
    },
    paragraph: { color: "#cd2026", fontSize: 14 },
    title: { fontSize: 14, textAlign: "center", fontWeight: "bold" },
});
