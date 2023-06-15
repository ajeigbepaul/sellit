import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
export default function ListItems({image,title,subTitle}) {
  return (
    <View style={styles.listItemContainer}>
      <Image source={image} style={styles.profilePics}/>
      <View style={styles.listItemDetails}>
        <Text style={styles.listName}>{title}</Text>
        <Text style={styles.listListings}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 50,
  },
  listItemDetails: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },
  listName: {fontWeight:'500', fontSize:16, marginBottom:5},
  listListings: {fontSize:16,color:'#999'},
  profilePics: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});