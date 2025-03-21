import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (!campsite) {
        return <View />;
    }

    return (
        <Card containerStyle={{ padding: 0 }}>
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
        </Card>
    );
};

export default RenderCampsite;
