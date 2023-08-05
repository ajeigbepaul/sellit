import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
const UploadScreen = ({ progress = 0, visible = true , onDone}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
       
          <Progress.Bar
            color={colors.primary}
            progress={progress * 100}
            width={200}
          />
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: { width: 150 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default UploadScreen;
