import { firestore } from "./firebaseConfig";

export const baseCollection = firestore.collection("proforma-test-data");

export const getDocumentsFormCollection = (doc) => {
  return {
    id: doc.id,
    ...doc.data(),
  };
};

export const deleteProforma = (id) => {
  console.log(id);
  baseCollection
    .doc(id)
    .delete()
    .then((response) => console.log(response))
    .catch((error) => console(error));
};

export const openEditForm = (id) => {
  baseCollection.doc(id).update({
    isEditing: true,
  });
};

export const closeEditForm = (id) => {
  baseCollection.doc(id).update({
    isEditing: false,
  });
};

export const editProforma = (id, editedProforma) => {
  baseCollection
    .doc(id)
    .update({
      ...editedProforma,
    })
    .then(() => console.log("proforma edited!"))
    .catch((err) => console.log(err));
};
