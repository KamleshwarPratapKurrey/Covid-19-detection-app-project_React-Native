import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Cards from '../components/Cards';
import ItemRows from "../components/ItemRows";

const Home = () => {
    const url = 'https://api.covid19api.com/summary';
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchCovidData = async () => {
            setIsLoading(true)
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setIsLoading(false);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchCovidData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.mHeading}>
                <Text style={styles.covidHeading}>COVID19 Global Report</Text>
            </View>
            <View style={styles.cards}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 170 }}>
                    <Cards icon='pulse' title='New Cases' bg='#f387f3d5' number={data ? data.Global.NewConfirmed : 0} />
                    <Cards icon='pulse' title='Total Cases' bg='#ffc04bab' number={data ? data.Global.TotalConfirmed : 0} />
                    <Cards icon='medkit' title='New Recovered' bg='#c6ff6ae0' number={data ? data.Global.NewRecovered : 0} />
                    <Cards icon='medkit' title='Total Recovered' bg='#82ff76ab' number={data ? data.Global.TotalRecovered : 0} />
                    <Cards icon='nuclear' title='New Deaths' bg='#6db8ffda' number={data ? data.Global.NewDeaths : 0} />
                    <Cards icon='nuclear' title='Total Deaths' bg='#ff3333b4' number={data ? data.Global.TotalDeaths : 0} />
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.casesHeading}>Covid cases by region</Text>
            </View>
            <View style={styles.flatlist}>
                <FlatList
                    data={data && data.Countries ? data.Countries : 0}
                    renderItem={({ item }) => <ItemRows item={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70,
        backgroundColor: '#eee',
    },
    covidHeading: {
        color: '#666',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cards: {
        marginTop: -100,
    },
    casesHeading: {
        color: '#666',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 26,
    }
})

export default Home;