import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function assigned() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
                    <View style={styles.backButtonContent}>
                        <AntDesign name="left" size={20} color="#9ED4BC" />
                        <Text style={styles.backButtonText}>Lists</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Assigned to me</Text>
            </View>
            <View style={styles.content}>
                <Image
                    source={require('../assets/img/bg/IMG_2368-removebg-preview.png')}
                    style={styles.image}
                />
                <Text style={styles.description}>Tasks assigned to you in To Do or Planner show up here.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 25,
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    backButton: {
        marginTop: 10,
        marginBottom: 10,
    },
    backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#9ED4BC',
        fontSize: 18,
    },
    headerTitle: {
        color: '#9ED4BC',
        fontSize: 36,
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    description: {
        color: '#9ED4BC',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
});