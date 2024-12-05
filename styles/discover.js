import { StyleSheet } from "react-native";

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
    modalContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        width: "80%",
        alignItems: "center",
    },
    modalImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    closeButton: {
        backgroundColor: "#198679",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        width: "50%",
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
