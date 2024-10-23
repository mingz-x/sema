// import { db } from "../../lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { content } = req.body;

//     try {
//       await addDoc(collection(db, "scraps"), {
//         content: content,
//         timestamp: serverTimestamp(),
//       });

//       res.status(200).json({ message: "Scrap saved successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Error saving scrap", details: error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

// import { db } from "../../lib/firebase";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const scrapsCollection = collection(db, "scraps");
//       const scrapsQuery = query(scrapsCollection, orderBy("timestamp", "desc"));
//       const querySnapshot = await getDocs(scrapsQuery);

//       const scraps = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       res.status(200).json(scraps);
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching scraps", details: error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }