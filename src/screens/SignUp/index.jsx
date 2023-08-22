import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { styles } from "./style"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from "../../config/FireBaseConfig";


export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            alert("Cadastro feito com sucesso")
            navigation.navigate("login")

        } catch (e) {
            alert("Erro ao efetuar cadastro")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: 'white' }}>Sign Up</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholderTextColor={'#e0e0e0'} placeholder="E-mail" value={email} onChangeText={(email) => setEmail(email)} autoCapitalize="none" />
                    <TextInput style={styles.input} placeholderTextColor={'#e0e0e0'} placeholder="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                {loading ? <ActivityIndicator size="large" color="#2E8B57" /> : 
                    <TouchableOpacity onPress={signUp}>
                        <Text style={styles.textButton}>Sign Up</Text>
                    </TouchableOpacity>}
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Text style={{color: 'white'}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Text style={styles.signUp}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}