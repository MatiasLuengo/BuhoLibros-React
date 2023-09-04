import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestoreDb } from '../firebase/client';

export const gets = {
    getBooks : () => {
        return new Promise((resolve, reject) =>{
            const collectionRef = collection(firestoreDb, "books");
            getDocs(collectionRef).then((snapshot)=>{
                resolve (snapshot);
            })            
        })
    },
    getBook : (itemId) => {
        return new Promise((resolve, reject) =>{
            const docRef = doc(firestoreDb, "books", itemId);
            getDoc(docRef).then((snapshot)=>{
                resolve(snapshot);
            })        
        })
    },
    getCategoryBooks : (itemCategory) => {
        return new Promise((resolve, reject) =>{
            const queryRef = query(collection(firestoreDb, "books"), where("category","==", itemCategory));
            getDocs(queryRef).then((snapshot)=>{resolve(snapshot)})
        })
    },
    getSubCategoryBooks : (category, itemSubCategory) => {
        return new Promise((resolve, reject) =>{
            const queryRef = query(collection(firestoreDb, "books"), where("category","==", category), where("subCategory","==", itemSubCategory));
            getDocs(queryRef).then((snapshot)=>{resolve(snapshot)})
        })
    },
    getBestSellersBooks : () => {
        return new Promise((resolve, reject) =>{
            const queryRef = query(collection(firestoreDb, "books"), where("bestSeller","==", true));
            getDocs(queryRef).then((snapshot)=>{resolve(snapshot)})
        })
    }
}