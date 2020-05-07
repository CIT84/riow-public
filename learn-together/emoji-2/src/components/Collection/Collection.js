import React, { useEffect,useState } from 'react'
import firebase from '../../auth/firebase'

function Collection() {
    const [collection, setCollection] = useState(null)

    const setupFirebase = () => {
        const db = firebase.firestore()
        const uid = firebase.auth().currentUser.uid
        const docRef = db.collection("emoji").doc(uid)
        return ([docRef])
    }

    useEffect(() => {
        const [docRef] = setupFirebase()
        let collArr = []
        const fetchEmojiData = async () => {
            const userCollection = await docRef.collection("collection").get()
            
            for (const col of userCollection.docs) {
                let obj = {}
                
                obj.id = col.id
                obj.name = col.data().collection
                obj.arr = col.data().emojis
                collArr.push(obj)
            }
            setCollection(collArr)
        }
        fetchEmojiData()
    }, [collection])

    const handleDelete = async (id) => {
        console.log(id)
        const [docRef] = setupFirebase()
        await docRef.collection("collection").doc(id).delete()
            .then(() => console.log('delete'))
            .catch((error)=> console.log(error))
        setCollection(null)
    }

    
    let collectionOutput
    if(collection) {
        collectionOutput = collection.map((each, index)=> (
         <section key={index} style={{color: 'red'}}>
            <span>{each.name} {each.arr}</span>
            <button onClick={()=>handleDelete(each.id)}>delete</button>
         </section>
        ))
    } else {
        collectionOutput = (<span>Loading....</span>)
    }
    
    return (
        <div>
            <h1>Your Collections</h1>
            {collectionOutput}
        </div>
    );
}

export default Collection;