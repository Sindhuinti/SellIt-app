import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from 'expo-location';

import CategoryPickerItem from "../components/CategoryPickerItem";
import listingsApi from '../api/listings';

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
  AppFormImagePicker as FormImagePicker
} from "../components/forms";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images:Yup.array().min(1,"Please select atleast one image.")
});

const categories = [
  { label: "Furniture", value: 1 ,backgroundColor:'red',icon:'apps'},
  { label: "Clothing", value: 2 ,backgroundColor:'yellow',icon:'apps'},
  { label: "Camera", value: 3 ,backgroundColor:'green',icon:'apps'},
];

function ListingEditScreen() {

  const location = useLocation();
  const [uploadVisible,setUploadVisible] =useState(false);
  const [progress,setProgress] = useState(0);

  const handleSubmit = async(listing,{resetForm}) =>{
    setProgress(0);
   
    setUploadVisible(true);
    const result = await listingsApi.addListing({...listing,location},
      progress => setProgress(progress));
    
    if(!result.ok)   {
      setUploadVisible(false);
      return alert("Unable to Save listing.")
    };
    
    resetForm();
   

  }

  
  return (
    <Screen style={styles.container}>
    <UploadScreen onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images:[],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
      <FormImagePicker name="images"/>
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker items={categories}
        name="category" 
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width="50%" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
