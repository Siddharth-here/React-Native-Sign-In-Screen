import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Image
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Assets } from "@react-navigation/elements";

const PRIMARY_GREEN = "#88D11A";
const BG_COLOR = "#F9F9F9";
const TEXT_DARK = "#1F1F1F";
const TEXT_MUTED = "#7C7C7C";

export default function App() {
  const [screen, setScreen] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}
        >
          {/* --- SIGN IN SCREEN --- */}
          {screen === "signin" && (
            <View style={styles.content}>
              <View style={styles.logoContainer}>
                <Image source={require('@/assets/images/tabIcons/logo.png')}
                height={10}
                width={10}
                />
                <Text style={styles.headerTitle}>Sign In</Text>
                <Text style={styles.headerSubtitle}>
                  Let's experience the joy of telecare AI.
                </Text>
              </View>

              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={22}
                  color={TEXT_MUTED}
                  style={styles.innerIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="siddharth@gmail.com"
                  placeholderTextColor="#BDBDBD"
                />
              </View>

              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={22}
                  color={TEXT_MUTED}
                  style={styles.innerIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password..."
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color={TEXT_MUTED}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Sign In</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#FFF"
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>

              <View style={styles.socialRow}>
                <TouchableOpacity style={styles.socialCircle}>
                  <FontAwesome5 name="facebook-f" size={18} color={TEXT_DARK} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCircle}>
                  <FontAwesome5 name="google" size={18} color={TEXT_DARK} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCircle}>
                  <FontAwesome5 name="instagram" size={18} color={TEXT_DARK} />
                </TouchableOpacity>
              </View>

              <View style={styles.footerRow}>
                <Text style={styles.footerLabel}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => setScreen("signup")}>
                  <Text style={styles.linkGreen}>Sign Up.</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setScreen("forgot")}
                style={{ marginTop: 12 }}
              >
                <Text style={styles.linkGreen}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* --- SIGN UP SCREEN --- */}
          {screen === "signup" && (
            <View style={styles.content}>
              <View style={styles.logoContainer}>
                <View style={styles.logoGrid}>
                  <View style={styles.logoDot} />
                  <View style={styles.logoDot} />
                  <View style={styles.logoDot} />
                  <View style={styles.logoDot} />
                </View>
                <Text style={styles.headerTitle}>Sign Up For Free</Text>
                <Text style={styles.headerSubtitle}>
                  Sign up in 1 minute for free!
                </Text>
              </View>

              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={22}
                  color={TEXT_MUTED}
                  style={styles.innerIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email..."
                  placeholderTextColor="#BDBDBD"
                />
              </View>

              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={22}
                  color={TEXT_MUTED}
                  style={styles.innerIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                />
              </View>

              <View style={[styles.inputWrapper]}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={22}
                  color={TEXT_MUTED}
                  style={styles.innerIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password Confirmation"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                />
              </View>
              <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Sign Up</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#FFF"
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>

              <View style={styles.footerRow}>
                <Text style={styles.footerLabel}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => setScreen("signin")}>
                  <Text style={styles.linkGreen}>Sign In.</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* --- FORGOT PASSWORD SCREEN --- */}
          {screen === "forgot" && (
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => setScreen("signin")}
                style={styles.backButton}
              >
                <Ionicons name="chevron-back" size={24} color={TEXT_DARK} />
              </TouchableOpacity>

              <Text style={[styles.headerTitle, { marginTop: 25 }]}>
                Forgot Password
              </Text>
              <Text
                style={[
                  styles.headerSubtitle,
                  { textAlign: "left", marginBottom: 30 },
                ]}
              >
                Select which methods you'd like to reset.
              </Text>

              {/* Email Option */}
              <TouchableOpacity style={styles.optionItem}>
                <View style={styles.optionIcon}>
                  <Ionicons name="mail-outline" size={20} color={TEXT_MUTED} />
                </View>
                <View>
                  <Text style={styles.optionMain}>Email Address</Text>
                  <Text style={styles.optionSub}>
                    Send via email address securely.
                  </Text>
                </View>
              </TouchableOpacity>

              {/* 2FA Option (Active) */}
              <TouchableOpacity
                style={[styles.optionItem, { borderColor: PRIMARY_GREEN }]}
              >
                <View
                  style={[styles.optionIcon, { backgroundColor: "#E8F5D5" }]}
                >
                  <Ionicons
                    name="phone-portrait-outline"
                    size={20}
                    color={PRIMARY_GREEN}
                  />
                </View>
                <View>
                  <Text style={styles.optionMain}>2 Factor Authentication</Text>
                  <Text style={styles.optionSub}>Send via 2FA securely.</Text>
                </View>
              </TouchableOpacity>

              {/* Google Authenticator Option */}
              <TouchableOpacity style={styles.optionItem}>
                <View style={styles.optionIcon}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={TEXT_MUTED}
                  />
                </View>
                <View>
                  <Text style={styles.optionMain}>Google Authenticator</Text>
                  <Text style={styles.optionSub}>
                    Send via authenticator securely.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.primaryBtn, { marginTop: 40 }]}>
                <Text style={styles.primaryBtnText}>Reset Password</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#FFF"
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG_COLOR },
  scrollWrapper: {
    paddingBottom: 50,
    paddingTop: Platform.OS === "ios" ? 60 : 30,
  },
  content: { paddingHorizontal: 30 },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  logoContainer: { alignItems: "center", marginBottom: 40 },
  logoGrid: {
    width: 36,
    height: 36,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  logoDot: {
    width: 14,
    height: 14,
    borderRadius: 4,
    backgroundColor: PRIMARY_GREEN,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: TEXT_DARK,
    marginTop: 20,
  },
  headerSubtitle: {
    fontSize: 14,
    color: TEXT_MUTED,
    marginTop: 8,
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#F0F0F0",
    borderRadius: 22,
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 16,
    elevation: 1,
  },
  innerIcon: { marginRight: 12 },
  input: { flex: 1, color: TEXT_DARK, fontSize: 15, fontWeight: "500" },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -6,
    marginBottom: 16,
    backgroundColor: "#FFF0F0",
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFD1D1",
  },
  errorText: {
    color: "#FF5A5F",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 6,
  },
  primaryBtn: {
    backgroundColor: PRIMARY_GREEN,
    flexDirection: "row",
    height: 60,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  primaryBtnText: { color: "#FFF", fontSize: 17, fontWeight: "700" },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 35,
  },
  socialCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  footerRow: { flexDirection: "row", justifyContent: "center", marginTop: 35 },
  footerLabel: { color: TEXT_MUTED, fontSize: 14 },
  linkGreen: {
    color: PRIMARY_GREEN,
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  optionMain: { fontSize: 16, fontWeight: "800", color: TEXT_DARK },
  optionSub: { fontSize: 12, color: TEXT_MUTED, marginTop: 2 },
});
