import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native"
import { styles } from "./style"
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FIREBASE_AUTH } from '../../config/FireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;
    const { setUser } = useContext(AuthContext)

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            alert("Login feito com sucesso")
            setUser(response)
        } catch (e) {
            alert("Erro ao efetuar login")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: 'white' }}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholderTextColor={'#e0e0e0'} placeholder="E-mail" value={email} onChangeText={(email) => setEmail(email)} autoCapitalize="none" />
                    <TextInput style={styles.input} placeholderTextColor={'#e0e0e0'} placeholder="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    {loading ? <ActivityIndicator size="large" color="#2E8B57" /> : 

                    <TouchableOpacity onPress={signIn}>
                        <Text style={styles.textButton}>Sign in</Text>
                    </TouchableOpacity>}
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Text style={{color: 'white'}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}