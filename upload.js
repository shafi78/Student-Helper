const admin = require('firebase-admin')

const serviceAccount = require('./ServicesAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const data = require('./data.json');

async function uploadData() {
    for ( const doc of data )
    {
        await db.collection('Courses').add(doc);
    }
}

uploadData();