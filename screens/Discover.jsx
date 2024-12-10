import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Share } from "react-native";
import styles from "../styles/discover"; // Importiertes Stylesheet

const Discover = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        {
            id: "1",
            image: require("../assets/medstorage.jpg"),
            medications: [
                { id: "101", name: "Medication 1", dosage: "Take 2 pills daily" },
                { id: "102", name: "Medication 2", dosage: "Take 1 pill after meals" },
            ],
            text: (
                <>
                    <Text style={{ fontWeight: "bold" }}>Medication Tips</Text>
                    {"\n"}
                    Store all medications in a secure, cool, and dry place. Follow the instructions on the label for safe use and keep them out of reach of children.
                </>
            ),
        },
        {
            id: "2",
            image: require("../assets/healthy food.webp"),
            medications: [],
            text: (
                <>
                    <Text style={{ fontWeight: "bold" }}>Healthy Snacks</Text>
                    {"\n"}
                    Discover nutritious and delicious snack options to keep your energy up throughout the day. Choose fresh fruits, nuts, and veggies for a healthier lifestyle.
                </>
            ),
        },
        {
            id: "3",
            image: require("../assets/pillOrganizr.webp"),
            medications: [],
            text: (
                <>
                    <Text style={{ fontWeight: "bold" }}>Pill Organizer Benefits</Text>
                    {"\n"}
                    Learn how a pill organizer can simplify your daily routine, helping you manage your medications effectively and ensuring you never miss a dose.
                </>
            ),
        },
        {
            id: "4",
            image: require("../assets/wald.jpg"),
            medications: [],
            text: (
                <>
                    <Text style={{ fontWeight: "bold" }}>The Benefits of Running Outdoors</Text>
                    {"\n"}
                    Running outdoors not only improves physical health but also boosts mental well-being. Enjoy the fresh air and scenic views while staying fit.
                </>
            ),
        },
    ];

    const handlePress = (item) => {
        setSelectedItem(item);
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: "Check out this amazing tip! 🏥",
                url: "https://example.com", // Optional: füge eine URL hinzu
            });

            if (result.action === Share.sharedAction) {
                console.log("Content shared successfully!");
            } else if (result.action === Share.dismissedAction) {
                console.log("Share dismissed!");
            }
        } catch (error) {
            console.error("Error while sharing: ", error.message);
        }
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
                keyExtractor={(item) => item.id} // Eindeutiger Key für FlatList
            />

            {selectedItem && (
                <Modal transparent={true} animationType="slide" visible={!!selectedItem}>
                    <View style={styles.modalBackground}>
                        <View style={styles.popupContainer}>
                            {/* Close-Icon */}
                            <TouchableOpacity
                                style={styles.closeIconContainer}
                                onPress={() => setSelectedItem(null)}
                            >
                                <Image
                                    source={require("../assets/close.png")}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                            {/* Share-Icon */}
                            <TouchableOpacity
                                style={styles.shareIconContainer}
                                onPress={handleShare}
                            >
                                <Image
                                    source={require("../assets/share.png")}
                                    style={styles.shareIcon}
                                />
                            </TouchableOpacity>
                            <Image source={selectedItem.image} style={styles.modalImage} />
                            <Text style={styles.modalText}>{selectedItem.text}</Text>
                            {selectedItem.medications.length > 0 && (
                                <View style={styles.medicationsContainer}>
                                    {selectedItem.medications.map((med) => (
                                        <Text key={med.id} style={styles.medicationText}>
                                            {med.name} - {med.dosage}
                                        </Text>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default Discover;
