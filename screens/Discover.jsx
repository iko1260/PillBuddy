import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Modal } from "react-native";
import styles from "../styles/discover"; // Importiere das getrennte Stylesheet

const Discover = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        { id: "1", image: require("../assets/medstorage.jpg"), text: "Medication Tips" },
        { id: "2", image: require("../assets/healthy food.webp"), text: "Healthy Snacks" },
        { id: "3", image: require("../assets/pillOrganizr.webp"), text: "Pill Organizer Benefits" },
        { id: "4", image: require("../assets/wald.jpg"), text: "The Benefits of Running Outdoors" },
    ];

    const handlePress = (item) => {
        setSelectedItem(item);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />

            {selectedItem && (
                <Modal transparent={true} animationType="slide" visible={!!selectedItem}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Image source={selectedItem.image} style={styles.modalImage} />
                            <Text style={styles.modalText}>{selectedItem.text}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setSelectedItem(null)}
                            >
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default Discover;