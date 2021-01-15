import React from 'react';


import {SafeAreaView, ScrollView, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';
import {WIDTH} from '@constants/dimensions';

const continousAttention = 199

const startWeight = 80;
const goalWeight = 65;
const nowWeight = 75;
const colorWeight = (startWeight-nowWeight)/(startWeight-goalWeight)

function ProfileScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
        <Header title="FITCLASS" />
        <ScrollView style={styles.mainContainer}>
            <ImageBackground
                style={styles.backgroundimage1}
                source={require('@assets/image/profile_background.jpg')}
                resizeMode="cover">
                <View
                    style={{
                        width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.profileimage} source={require('@assets/image/main_banner.jpg')}/>
                    <Text style={styles.text1}>Jill</Text>
                    <Text style={styles.text2}>시작일 2021-01-15</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.howlong}>{continousAttention}</Text>
                        <Text style={styles.text3}>일째 연속 출석</Text>
                    </View>
                    <Text style={styles.text2}>May 14 - Jun 13</Text>
                    <View style={styles.graph}>
                        <View style={{flex: colorWeight, backgroundColor: "#FF7D7D", borderRadius: 5}}></View>
                        <View style={{flex: 1-colorWeight}}></View>
                    </View>
                    <View style={{flexDirection: 'row', width: '90%'}}>
                        <Text style={styles.text4}>시작 체중</Text>
                        <View style = {{flex: 1}} />
                        <Text style={styles.text4}>목표 체중</Text>
                    </View>
                    <View style={styles.graph}>
                        <View style={{flex: colorWeight, backgroundColor: "#FFBC64", borderRadius: 5}}></View>
                        <View style={{flex: 1-colorWeight}}></View>
                    </View>
                    <View style={{flexDirection: 'row', width: '90%'}}>
                        <Text style={styles.text4}>시작 중량</Text>
                        <View style = {{flex: 1}} />
                        <Text style={styles.text4}>목표 중량</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{flexDirection: 'row'}}>
                <ImageBackground 
                    style={styles.backgroundimage2}
                    source={require('@assets/image/profile_background.jpg')}
                    resizeMode="cover">
                    <View style={styles.backgroundcover}>
                        <Text style={[styles.text4, {textAlign: 'right', marginRight: 5}]}>FITCLASS TUTOR</Text>
                        <Text style={[styles.text1, {textAlign: 'right', marginRight: 5}]}>FITCLASS PT 서비스</Text>
                    </View>
                </ImageBackground>
                <ImageBackground 
                    style={styles.backgroundimage2}
                    source={require('@assets/image/profile_background.jpg')}
                    resizeMode="cover">
                    <View style={styles.backgroundcover}>
                        <Text style={[styles.text4, {textAlign: 'right', marginRight: 5}]}>FITCLASS AI</Text>
                        <Text style={[styles.text1, {textAlign: 'right', marginRight: 5}]}>FITCLASS 자세교정</Text>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: BACKGROUND,
      },
      backgroundimage1: {
        width: WIDTH,
        height: 330,
      },
      backgroundimage2: {
        width: WIDTH/2,
        height: 150,
        marginTop: 10,
      },
      backgroundcover: {
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)', 
        width: '100%', 
        height: '100%',
      },
      profileimage: {
        width: 130,
        height: 130,
        marginLeft: -15,
        paddingHorizontal: 15,
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 5
      }
      ,
    text1: {
        color: "#ffffff",
        fontSize: 20,
        fontFamily: 'OpenSauceSans-Bold',
    },
    text2: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'OpenSauceSans',
        marginBottom: 2,
    },
    text3: {
        color: '#DEF9E9',
        fontFamily: 'OpenSauceSans-Bold',
        fontSize: 22,
    },
    text4: {
        color: '#ffffff',
        fontFamily: 'OpenSauceSans-Bold',
        fontSize: 11,
        marginTop: 2,
    },
    text5: {
        color: '#ffffff',
        fontFamily: 'OpenSauceSans-Bold',
        fontSize: 11,
        marginTop: 2,
        textAlign: 'right',
        marginRight: 5,
    },
    howlong: {
        color: '#6EEE1A',
        fontFamily: 'OpenSauceSans-Bold',
        fontSize: 22,
    },
    graph: {
        height: 12,
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginTop: 8,
        flexDirection: 'row',
    }

});