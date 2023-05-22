import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import toRupiah from "../helpers/toRupiah";
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";


const GET_PRODUCTS_BY_ID = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      name
      description
      price
      authorId
      Images {
        id
        imgUrl
      }
    }
  }
`;

export default function Detail({ route }) {
    const { id } = route.params;
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, {
        variables: {
            productId: id,
        },
    });
    console.log(data, "<<<<<<<<<<<<<<<<<<<<<<<<<<<ini data detail");

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handleImagePress = (index) => {
        setSelectedImageIndex(index);
    };
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Image
                    style={styles.loadingImage}
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



    return (
        <ImageBackground
            source={{
                uri: "https://wallpaperaccess.com/full/1370963.jpg",
            }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: data.product.Images[selectedImageIndex].imgUrl }}
                            style={styles.selectedImage}
                        />


                        <View style={styles.thumbnailContainer}>
                            {data.product.Images.map((item, index) => (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => handleImagePress(index)}
                                    style={[
                                        styles.thumbnailNumber,
                                        selectedImageIndex === index && styles.selectedThumbnailNumber,
                                    ]}
                                >
                                    <Text style={styles.thumbnailNumberText}>{index + 1}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <Text style={styles.title}>{data.product.name}</Text>
                            <Text style={styles.description}>{data.product.description}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>{toRupiah(data.product.price)}</Text>
                                <TouchableOpacity style={styles.buyButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Ionicons name="ios-cart" size={24} color="white" />
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Buy Now</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    title: {
        color: '#888',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F69989',
        marginBottom: 7,
        marginTop: 9
    },
    buyButton: {
        backgroundColor: "#F69989",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
 
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    description: {
        color: '#888',
        fontSize: 16,
        lineHeight: 24,
    },
    textA: {
        fontSize: 40, // Set font size to 40
        textAlign: 'center', // Center align text
        color: 'white', // Set font color to white
        fontWeight: 'bold', // Add this line to make the text more bol
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    box: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 15,
    },

    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
    },
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
    },
    selectedImage: {
        width: 420,
        height: 420,
        resizeMode: "contain",
    },


    thumbnailContainer: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 20
    },

    thumbnailNumber: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedThumbnailNumber: {
        backgroundColor: '#ddd',
    },
    thumbnailNumberText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    }

});
