import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (!campsite) {
        return <View />;
    }

    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Image source={{ uri: baseUrl + campsite.image }}>
                <View style={{ padding: 10 }}>
                    <Text style={styles.cardText}>{campsite.name}</Text>
                    <Text style={{ marginTop: 10 }}>{campsite.description}</Text>
                </View>
            </Card.Image>
            <View style={styles.cardRow}>
                <Icon
                    name={props.isFavorite ? 'heart' : 'heart-o'}
                    type="font-awesome"
                    color="#f50"
                    raised
                    reverse
                    onPress={() =>
                        props.isFavorite
                            ? console.log('Already set as a favorite')
                            : props.markFavorite()
                    }
                />
                <Icon
                    name="pencil"
                    type="font-awesome"
                    color="#5637DD"
                    raised
                    reverse
                    onPress={() => props.onShowModal()} 
                />
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default RenderCampsite;
