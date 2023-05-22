import { gql, useQuery } from "@apollo/client";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import CardItem from "../components/card";

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      mainImg
    }
  }
`;

export default function Products() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    console.log(data, "ini datanya");

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/logo.png")}
                />
            </View>
        );
    }
    if (error) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Error : {error.message}</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => <CardItem data={item} />;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                    source={{
                        uri: "https://husqbm.stripocdn.email/content/guids/CABINET_212da7c1afd384ced0cb2caf0978ccc405195a24a76396f51fc7b5927ab29846/images/breaker_2.jpg",
                    }}
                    style={styles.imageBanner}
                />
            </View>
            <FlatList
                style={styles.products}
                horizontal={false}
                numColumns={2}
                data={data.products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    products: {
        marginVertical: 0,
    },
    image: { width: 200, height: 200 },
    imageBanner: {
        width: 420,
        height: 56,
        resizeMode: 'cover',
        borderRadius: 0,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
