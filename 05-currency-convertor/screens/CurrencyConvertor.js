import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";
import { useFormik } from "formik";
import { inrInputSchema } from "./schemas";
import { currencyData } from "./CurrencyData";

const initialValues = {
  inrInput: "",
};

const CurrencyConvertor = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyData[0]);
  const [amount, setAmount] = useState(0);
  const [currencyToConvert, setCurrencyToConvert] = useState(null);

  //   Currency Convertor Function
  const convertCurrency = (currency, inrValue) => {
    // For VIBRATION
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    let inr = parseFloat(inrValue);
    let total = inr * currency.rate;

    setSelectedCurrency(currency);
    setAmount(total.toFixed(2));
  };

  //   Handle Reset Function
  const handleReset = () => {
    // For VIBRATION
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    resetForm();
    setAmount(0);
    setSelectedCurrency(currencyData[0]);
    setCurrencyToConvert(null);
  };

  //   Using Formik and Yup for Input Field Handling & Validation
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: inrInputSchema,
    onSubmit: (values) => {
      console.log(values);
      if (currencyToConvert) {
        convertCurrency(currencyToConvert, values.inrInput);
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>CURRENCY CONVERTOR</Text>

      {/* Output View */}
      <View style={styles.outputConatiner}>
        <Text style={styles.outputText}>
          {selectedCurrency.currencySymbol} {amount}{" "}
          {selectedCurrency.happyEmoji}
        </Text>
      </View>

      {/* Indian Currency Input Text Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.inrICON}>₹</Text>
        <TextInput
          name="inrInput"
          placeholder="Enter a value here ..."
          value={values.inrInput}
          onChangeText={handleChange("inrInput")}
          onBlur={handleBlur("inrInput")}
          style={styles.inputINR}
          keyboardType="numeric"
          multiline
          scrollEnabled={false}
        />

        {/* Reset Button */}
        <Pressable style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetBtnText}>Reset</Text>
        </Pressable>
      </View>

      {/* Error Container for Text-Input Field */}
      <View style={styles.errorContainer}>
        {touched.inrInput && errors.inrInput ? (
          <Text style={styles.errorText}>{errors.inrInput}</Text>
        ) : null}
      </View>

      {/* Button Container */}
      <View style={styles.btnContainer}>
        <FlatList
          style={styles.flatListStyle}
          data={currencyData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  setCurrencyToConvert(item);
                  handleSubmit();
                }}
                style={styles.btn}
              >
                <Text style={styles.flagIcon}>{item.flag}</Text>
                <Text style={styles.btnText} numberOfLines={5}>
                  {item.currencyName}
                </Text>
              </Pressable>
            );
          }}
          numColumns={3}
          columnWrapperStyle={styles.row}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CurrencyConvertor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  outputConatiner: {
    marginVertical: 25,
    display: "flex",
    alignItems: "center",
  },
  outputText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
  },
  inrICON: {
    fontSize: 35,
    color: "white",
  },
  inputINR: {
    width: "60%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "gray",
    borderRadius: 15,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetBtn: {
    height: 40,
    width: 60,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 16,
    justifyContent: "center",
    backgroundColor: "red",
  },
  resetBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  errorContainer: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
  },
  errorText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  btnContainer: {
    flex: 1,
    marginTop: 25,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484A",
    borderRadius: 16,
  },
  btn: {
    width: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484A",
    borderRadius: 12,
    padding: 6,
    backgroundColor: "#2C2C2E",
  },
  flagIcon: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 8,
  },
  btnText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  row: {
    justifyContent: "space-between",
  },
  flatListStyle: {
    flex: 1,
  },
});
