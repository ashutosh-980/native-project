import {
  Alert,
  Modal,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFormik } from "formik";
import React, { useState } from "react";
import { passwordLengthSchema } from "./schemas";
import * as Clipboard from "expo-clipboard";

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  //   Create a Function to "Copy the Generated Password"
  const copyPassword = async () => {
    await Clipboard.setStringAsync(generatedPassword);
  };

  // Create a Function to "Share the Generated Password"
  const sharePassword = async () => {
    try {
      await Share.share({
        message: `My generated password :- ${generatedPassword}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   Initial Values for using "FORMIK"
  const initialValues = {
    passwordLength: "",
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  //   Destructuring Values of Formik
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: passwordLengthSchema, //integrate 'Yup' schema
    onSubmit: (values) => {
      // Logic For Creating Random Password
      let characters = "";

      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()_+-=[]{}";

      if (values.lowercase) {
        characters += lowercaseChars;
      }

      if (values.uppercase) {
        characters += uppercaseChars;
      }

      if (values.numbers) {
        characters += numberChars;
      }

      if (values.symbols) {
        characters += symbolChars;
      }

      if (characters.length === 0) {
        Alert.alert("Please select at-least one option.");
        return;
      }

      let password = "";

      for (let i = 0; i < Number(values.passwordLength); i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

      setGeneratedPassword(password);
      setShowModal(true);
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Password Generator</Text>
      <View style={styles.innerContainer}>
        {/* Input Password Length Container */}
        <View style={styles.lengthContainer}>
          <Text style={styles.text}>Password Length</Text>
          <TextInput
            style={[styles.lengthInput, styles.inputText]}
            name="passwordLength"
            value={values.passwordLength}
            onChangeText={handleChange("passwordLength")}
            onBlur={handleBlur("passwordLength")}
            placeholder="Ex. 8"
            placeholderTextColor="#D1D1D6"
            keyboardType="numeric"
          />
        </View>

        {/* Error Container */}
        <View style={styles.errorConatiner}>
          {touched.passwordLength && errors.passwordLength && (
            <Text style={styles.errorText}>{errors.passwordLength}</Text>
          )}
        </View>

        {/* Password Properties Container */}
        <View style={styles.propertiesContainer}>
          {/* Lowercase Letters */}
          <Pressable
            style={styles.option}
            onPress={() => setFieldValue("lowercase", !values.lowercase)}
          >
            <Text style={styles.text}>Include lowercase letters</Text>
            <View style={[styles.checkbox, values.lowercase && styles.checked]}>
              {values.lowercase && <Text style={styles.tick}>✓</Text>}
            </View>
          </Pressable>

          {/* Uppercase Letters */}
          <Pressable
            style={styles.option}
            onPress={() => setFieldValue("uppercase", !values.uppercase)}
          >
            <Text style={styles.text}>Include uppercase letters</Text>
            <View style={[styles.checkbox, values.uppercase && styles.checked]}>
              {values.uppercase && <Text style={styles.tick}>✓</Text>}
            </View>
          </Pressable>

          {/* Numbers */}
          <Pressable
            style={styles.option}
            onPress={() => setFieldValue("numbers", !values.numbers)}
          >
            <Text style={styles.text}>Include numbers</Text>
            <View style={[styles.checkbox, values.numbers && styles.checked]}>
              {values.numbers && <Text style={styles.tick}>✓</Text>}
            </View>
          </Pressable>

          {/* Symbols */}
          <Pressable
            style={styles.option}
            onPress={() => setFieldValue("symbols", !values.symbols)}
          >
            <Text style={styles.text}>Include symbols</Text>
            <View style={[styles.checkbox, values.symbols && styles.checked]}>
              {values.symbols && <Text style={styles.tick}>✓</Text>}
            </View>
          </Pressable>
        </View>

        {/* Button Conatiner */}
        <View style={styles.btnContainer}>
          {/* Generate Button */}
          <Pressable style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Generate</Text>
          </Pressable>

          {/* Reset Button */}
          <Pressable style={styles.btn} onPress={() => resetForm()}>
            <Text style={styles.btnText}>Reset</Text>
          </Pressable>
        </View>

        {/* Modal Container */}
        <Modal
          transparent={true}
          visible={showModal}
          animationType="slide"
          onRequestClose={() => {
            setShowModal(false);
            resetForm();
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Modal's Title Text */}
              <Text style={styles.modalTitle}>Generated Password</Text>

              {/* Generated Password Text */}
              <Text style={styles.passwordText}>{generatedPassword}</Text>

              {/* Copy and Share Button Container */}
              <View style={styles.btnContainer2}>
                {/* Copy Password Button */}
                <Pressable style={styles.btn} onPress={copyPassword}>
                  <Text style={styles.btnText}>Copy</Text>
                </Pressable>

                {/* Share Password Button */}
                <Pressable style={styles.btn} onPress={sharePassword}>
                  <Text style={styles.btnText}>Share</Text>
                </Pressable>
              </View>

              {/* Modal's Close Button */}
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  setShowModal(false);
                  resetForm();
                }}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    color: "#FFFFFF",
    marginBottom: 16,
  },
  lengthContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "#D1D1D6",
  },
  lengthInput: {
    width: 85,
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#38383A",
    borderRadius: 10,
    color: "#A1A1A6",
  },
  inputText: {
    color: "#D1D1D6",
    marginTop: 5,
    fontSize: 12,
  },
  errorConatiner: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 12,
    fontWeight: "600",
  },
  propertiesContainer: {
    marginVertical: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#A1A1A6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checked: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6",
  },
  tick: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: {
    width: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    borderRadius: 25,
    padding: 8,
    backgroundColor: "blue",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    padding: 25,
    borderRadius: 15,
    backgroundColor: "#2C2C2E",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  passwordText: {
    fontSize: 20,
    color: "#D1D1D6",
    marginBottom: 25,
  },
  btnContainer2: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
