import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen'

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen></LoginScreen>
      </SignedOut>

    </ClerkProvider>
  );
}
