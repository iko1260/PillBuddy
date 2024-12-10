import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    item: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    popupContainer: {
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    closeIconContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 1,
    },
    closeIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    shareIconContainer: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
    },
    shareIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    modalImage: {
        width: "100%",
        height: 150,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    medicationsContainer: {
        marginBottom: 20,
    },
    medicationText: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
    },
});

export default styles;
