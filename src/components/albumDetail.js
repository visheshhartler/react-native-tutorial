import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, artist, title, image, url } = album;
    const { thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,  
        imageStyle } = styles;
    return (
        <Card>
            <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                 source={{ uri: thumbnail_image }} 
                 style={thumbnailStyle}
                />
            </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
             </CardSection>

             <CardSection>
             <Image 
                source={{ uri: image }}
                style={imageStyle}
             />
             </CardSection>

             <CardSection>
                <Button 
                 onPress={() => Linking.canOpenURL(url).then(supported => {
                    if (!supported) {
                      console.log(`Can't handle url: ${url}`);
                    } else {
                      return Linking.openURL(url);
                    }
                  }).catch(err => console.error('An error occurred', err))} 

                 buttonText={'Buy'}
                />
             </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null
    }
};

export default AlbumDetail;
