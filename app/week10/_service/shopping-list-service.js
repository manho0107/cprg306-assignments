import { db } from "../_utils/firebase";
import { collection, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore";

export  const getItems = async (userID) => {
    try {
        console.log("Database instance: ", db);
        console.log("User ID: ", userID);
        const userItemsCollectionRefNo = collection(db, "users", userID, "items");
        const itemsScreenShot = await getDocs(userItemsCollectionRefNo);
        const mappedItems = itemsScreenShot.docs.map((itemsDoc) => ({
            id: itemsDoc.id,
            ...itemsDoc.data(),
        }));

        return mappedItems;
        } catch (fetchItemsError) {
            console.error("Error (getItems): ", fetchItemsError);
        }
    };

    export const addItems = async (userID, item) => {
        try {
            const userItemsCollectionRef = collect(db, "users", userID, "items");
            const docRef = await addDoc(userItemsCollectionRef, item);
            return docRef.id;
            } catch (error) {
                console.error("Error (addItem): ", error);
            }
        };

    export const deleteItems = async (userID, itemID) => {
        try {
            const itemDocRef = doc(db, "users", userID, "items", itemID);
            await deleteDoc(itemDocRef);
            }
            catch (error) {
                console.error("Error (deleteItem): ", error);
            }
        };
