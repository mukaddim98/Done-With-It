import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";
import { ScrollView } from "react-native";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image}>
              <ImageInput
                imageUri={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <View style={styles.image}>
            <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { margin: 10, marginRight: 0 },
});

export default ImageInputList;
