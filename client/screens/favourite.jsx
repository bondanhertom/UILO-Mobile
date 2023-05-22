import { Image, SafeAreaView, StyleSheet, Text } from "react-native";

export default function More() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Feature is under development. {"\n"}Please try again later.</Text>
            <Image style={styles.image} source={require("../assets/undermaintanace.png")} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 30,
        marginBottom: 30,
    },
    image: {
        width: 300,
        height: 500,
        marginBottom: 20,
    },
});
