import React from "react";
import { View, StyleSheet, Button, Text, Image, Alert } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
function App() {
    const handlePayment = () => {
        var options = {
            name: 'React Native',
            description: 'For test payment',
            currency: 'INR',
            amount: 50000,
            key: 'rzp_test_KfiKfIfzGCnhZz',
            prefill: {
                email: 'albin@gmail.com',
                contact: '9123456788',
                name: 'Albin Joy'
            },
            theme: { color: '#457997' }
        };
        RazorpayCheckout.open(options).then((data) => {
            console.log('Success: ', data);
            Alert.alert("Success");
        })
            .catch((error) => {
                Alert.alert(`error:${error.code}|${error.description}`)
            })
    }
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.webp')} style={styles.img} />
            <Text style={styles.txt}>Course : React Native</Text>
            <Text style={styles.txt}>Amount : Rs. 500</Text>
            <Button title="   Pay Now   " onPress={() => handlePayment()} />
        </View>
    )
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ccc'
    },
    txt: {
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },
    img: {
        width: '80%',
        resizeMode: 'contain'
    }
})