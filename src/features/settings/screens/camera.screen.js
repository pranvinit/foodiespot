import React, { useState, useEffect, useContext, useRef } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

import { CustomText } from "../../../components/typography/text.component";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CameraView = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const Capture = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 4px solid white;
  position: absolute;
  top: 80%;
  left: 50%;
  margin-left: -40px;
`;

const CameraFlip = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 4px solid white;
  position: absolute;
  top: 80%;
  margin-top: 10px;
  left: 75%;
`;

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  // auth context properties
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef(null);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@${user.uid}_photo_uri`, photo.uri);
      navigation.goBack();
    }
  };

  const toggleType = () => {
    return type === Camera.Constants.Type.front
      ? Camera.Constants.Type.back
      : Camera.Constants.Type.front;
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <CenteredView />;
  }
  if (hasPermission === false) {
    return <CustomText vairant="error">No access to camera</CustomText>;
  }

  return (
    <CameraView
      type={type}
      ref={(ref) => {
        cameraRef.current = ref;
      }}
    >
      <Capture onPress={snap}>
        <Ionicons name="camera" color="#fff" size={40} />
      </Capture>
      <CameraFlip onPress={() => setType(toggleType)}>
        <Ionicons name="camera-reverse" color="#fff" size={20} />
      </CameraFlip>
    </CameraView>
  );
}
