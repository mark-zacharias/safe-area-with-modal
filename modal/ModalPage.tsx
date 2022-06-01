/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native';
import Modal2 from 'react-native-modal';
import { SafeAreaView as SafeAreaView2 } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSafeAreaModalOpen, setIsSafeAreaModalOpen] = useState(false);
    const [isSafeArea2ModalOpen, setIsSafeArea2ModalOpen] = useState(false);

    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isSafeAreaModal2Open, setIsSafeAreaModal2Open] = useState(false);
    const [isSafeArea2Modal2Open, setIsSafeArea2Modal2Open] = useState(false);
    return (
    <>
        <SafeAreaView style={styles.container}>
            <View style={[styles.card]}>
                <Text style={styles.sectionTitle}>Modal</Text>

                <Button title="Open Modal" onPress={() => setIsModalOpen(true)} />
                <Button title="Open Safe Area Modal" onPress={() => setIsSafeAreaModalOpen(true)} />
                <Button title="Open Safe Area 2 Modal" onPress={() => setIsSafeArea2ModalOpen(true)} />

            </View>
            <View style={[styles.card]}>
                <Text style={styles.sectionTitle}>React-Native-Modal</Text>

                <Button title="Open Modal2" onPress={() => setIsModal2Open(true)} />
                <Button title="Open Safe Area Modal2" onPress={() => setIsSafeAreaModal2Open(true)} />
                <Button title="Open Safe Area 2 Modal2" onPress={() => setIsSafeArea2Modal2Open(true)} />

            </View>
            <Text style={styles.sectionDescription}>more content</Text>
        </SafeAreaView>

        <Modal visible={isModalOpen} animationType="slide">
            <View style={{flex: 1}}>
                <Text>modal with no safe area</Text>
                <Button title="Dismiss" onPress={() => setIsModalOpen(false)} />
            </View>
        </Modal>
        <Modal visible={isSafeAreaModalOpen} animationType="slide">
            <SafeAreaView style={{flex: 1}}>
                <Text>modal with SafeAreaView</Text>
                <Button title="Dismiss" onPress={() => setIsSafeAreaModalOpen(false)} />
            </SafeAreaView>
        </Modal>
        <Modal visible={isSafeArea2ModalOpen} animationType="slide">
            <SafeAreaView2 style={{flex: 1}}>
                <Text>modal with react-native-safe-area-context SafeAreaView</Text>
                <Button title="Dismiss" onPress={() => setIsSafeArea2ModalOpen(false)} />
            </SafeAreaView2>
        </Modal>

        <Modal2 isVisible={isModal2Open} backdropColor="#fff" backdropOpacity={1}>
            <View style={{flex: 1}}>
                <Text>react-native-modal with no safe area</Text>
                <Button title="Dismiss" onPress={() => setIsModal2Open(false)} />
            </View>
        </Modal2>
        <Modal2 isVisible={isSafeAreaModal2Open} backdropColor="#fff" backdropOpacity={1}>
            <SafeAreaView style={{flex: 1}}>
                <Text>react-native-modal with SafeAreaView</Text>
                <Button title="Dismiss" onPress={() => setIsSafeAreaModal2Open(false)} />
            </SafeAreaView>
        </Modal2>
        <Modal2 isVisible={isSafeArea2Modal2Open} backdropColor="#fff" backdropOpacity={1}>
            <SafeAreaView2 style={{flex: 1}}>
                <Text>react-native-modal with react-native-safe-area-context SafeAreaView</Text>
                <Button title="Dismiss" onPress={() => setIsSafeArea2Modal2Open(false)} />
            </SafeAreaView2>
        </Modal2>
    </>
    );
};
export default ModalPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    card: {
        elevation: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 4,
        //borderWidth: 1,
        zIndex: -1,
        backgroundColor: '#DEE3E9',
        padding: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
