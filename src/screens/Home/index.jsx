import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from './styles'

import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function Home({ navigation }) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)


    async function getCharacters() {
        if (loading) return;

        setLoading(true)

        const response = await (await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)).data["results"]

        setData([...data, ...response]) // Pegando o conteudo antigo e juntando com o novo
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        getCharacters()
    }, [page])


    const Item = ({ name, image, status, species, location, origin }) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("character", { name, image, status, species, location, origin })}>
                <Image style={styles.image} source={{ uri: image }} />
             
                    <View style={styles.content}>

                        <View >
                            <Text style={styles.title}> {name} </Text>
                            <Text style={styles.styleText}>
                                <Icon style={status == 'Alive' ? styles.green : status == 'Dead' ? styles.red : styles.gray} name="circle" size={10} /> {status} - {species}
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Last know location:</Text>
                            <Text style={styles.text}>{location}</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>First seen in:</Text>
                            <Text style={styles.text}>{origin}</Text>
                        </View>
                    </View>
            </TouchableOpacity>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} image={item.image} status={item.status} species={item.species} location={item.location.name} origin={item.origin.name} />}
                keyExtractor={item => item.id}
                onEndReached={getCharacters}
                onEndReachedThreshold={0.2}
                ListFooterComponent={<ActivityIndicator color={'green'} size={'large'} />}
                showsVerticalScrollIndicator={false }
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={getCharacters}
                        colors={['green']}
                    />}
            />
        </SafeAreaView>


    )
}