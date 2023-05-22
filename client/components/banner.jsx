import { Image, StyleSheet } from "react-native";

export default function Banner({ image }) {
    return (
        <Image
            style={styles.image}
            source={{
                uri: image,
            }}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
    },
});
