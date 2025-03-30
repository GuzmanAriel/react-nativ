import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (!campsite) {
        return <View />;
    }

    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Image source={campsite.image}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {campsite.name}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        {campsite.description}
                    </Text>
                </View>
            </Card.Image>
            <Icon
                name={props.isFavorite ? 'heart' : 'heart-o'} 
                type='font-awesome'
                color='#f50'
                raised
                reverse
                onPress={() =>
                    props.isFavorite
                        ? console.log('Already set as a favorite') 
                        : props.markFavorite()                    
                }
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite;
