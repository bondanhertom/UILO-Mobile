import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import Banner from "../components/banner";

export default function Home({ navigation }) {
    const handleShopNowPress = () => {
        navigation.navigate('Products');
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.search}>
                    <Searchbar style={styles.search} placeholder="Search Product" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.registerLink}>
                        {`Register & get 10% off Your First Order.
  Use code: UILO45`}
                    </Text>
                </View>

                <View style={{ height: 65 }}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/LATE_DELIVERY_WILL_ARRIVE_SOON_SKINNY_MOBILE.jpg",
                        }}
                    />
                </View>
                <View style={{ flex: 3 }}>


                    <View style={styles.banner}>
                        <Banner
                            image={
                                "https://images.squarespace-cdn.com/content/v1/5eea60c443e96315f7d320c1/1592422435800-9ZV6277FAA190R0XYCVR/Banners_02.png?format=1000w"
                            } />
                    </View>

                    <View style={styles.banner}>
                        <Banner
                            image={"https://im.uniqlo.com/global-cms/spa/res4df6354a62eb79e95220c1be5e5ecc76fr.jpg"}
                        />
                        <TouchableOpacity style={styles.bannerTextContainer} onPress={handleShopNowPress}>
                            <View >
                                <Text style={styles.bannerText}>Shop Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>




                    <View style={styles.banner}>
                        <Banner
                            image={
                                "https://images.squarespace-cdn.com/content/v1/5eea60c443e96315f7d320c1/1592422435767-G3A9IJAHU9WW6OVL9POO/Banners_01.png?format=1000w"
                            } />
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: 230,
    },
    bannerTextContainer: {
        position: "absolute",
        top: "60%",
        left: "20%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    bannerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    textContainer: {
        height: 30,
    },
    container: {
        flex: 1,
    },
    search: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E7E9EB",
    },
    image: {
        width: "100%",
        height: 71,
    },
    registerLink: {
        fontSize: 12,
        textAlign: "center",
        textDecorationLine: "underline",
    },
    search: { height: 50, marginBottom: 10 },
});
