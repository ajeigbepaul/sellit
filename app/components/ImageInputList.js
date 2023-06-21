import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";
import useMultipleImg from "../hook/useMultipleImg";

export default function ImageInputList() {
  const scroll = useRef();
  const { handleAdd, handlePress, imageUris } = useMultipleImg();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scroll}
        onContentSizeChange={() => scroll.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri.uri} style={styles.image}>
              <ImageInput
                imgUri={uri.uri}
                handlePress={() => handlePress(uri.uri)}
              />
            </View>
          ))}
          <ImageInput handlePress={handleAdd} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginHorizontal: 5,
  },
});
