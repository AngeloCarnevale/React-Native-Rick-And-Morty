import { View, Text, Image } from "react-native";
import { styles } from './style'


export default function Character({ route }) {

    return (
        <View style={styles.container}>
            <View style={styles.characterContent}>
                <Image style={styles.characterImage} source={{ uri: route.params.image }} />

                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>{route.params.name}</Text>
                        <Text style={styles.text}>{route.params.status} - {route.params.species}</Text>
                    </View>

                    <View>
                        <Text style={styles.label}>Last know location:</Text>
                        <Text style={styles.text}>{route.params.location}</Text>
                    </View>

                    <View>
                        <Text style={styles.label}>First seen in:</Text>
                        <Text style={styles.text}>{route.params.origin}</Text>
                    </View>
                </View>


            </View>

        </View>
    )
}