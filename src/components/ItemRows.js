import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

const ItemRows = ({ item }) => {
    return (
        <View style={styles.pageRows}>
            <View style={styles.rows}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View>
                        <Image
                            source={{
                                uri: `https://flagcdn.com/16x12/${item.CountryCode}.png`
                            }}
                            style={styles.flags}
                        />
                    </View>
                    <View style={{ marginTop: 5, marginRight: 100 }}>
                        <Text style={styles.countryName}>{item.Country}</Text>
                    </View>
                    <View>
                        <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageRows: {
        marginLeft: 8,
        marginRight: 8,
    },
    rows: {
        backgroundColor: '#eee',
        width: '100%',
        borderRadius: 15,
        paddingRight: 10,
        paddingLeft: 4,
        paddingBottom: 8,
        paddingTop: 8,
        // borderColor: '#ccc',
        // borderWidth: .77,
        marginBottom: 10,
    },
    countryName: {
        fontSize: 13,
    },
    totalCases: {
        fontSize: 13,
        // fontWeight: 'bold',
        marginTop: 5,
    },
    flags: {
        height: 30,
        width: 40,
        padding: 5,
        borderRadius: 3,
    }
});

export default ItemRows;