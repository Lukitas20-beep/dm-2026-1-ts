import { SectionListExample } from "@/components/SectionListExample";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { UpdateScreen } from "@/screens/UpdateScreen";
import { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  let MyComponent;
  const [isEnabled, setIsEnabled] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  if (showUpdate) {
    return <UpdateScreen onBack={() => setShowUpdate(false)} />;
  }

  if (showProfile) {
    return <ProfileScreen onBack={() => setShowProfile(false)} />;
  }

  if (isEnabled) {
    MyComponent = <SectionListExample />;
  } else {
    MyComponent = (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={styles.title}>Olá Turma!</Text>
        {/* <PizzaTranslator /> */}
        <Button
          title="Ver Atualização em Andamento"
          onPress={() => setShowUpdate(true)}
        />
        <Button
          title="Perfil Rápido"
          onPress={() => setShowProfile(true)}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {MyComponent}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
});
