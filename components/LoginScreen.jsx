import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser(); 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    
    <View>
      <Image source={require('./../../myapp/assets/images/logo.png')}
      style={{
        width:'100%',
        height:550
      }}></Image>
      <Text 
      style={{
        fontSize:25,
        fontFamily:'bold',
        textAlign:'center'
      }}>CHÀO MỪNG BẠN ĐẾN VỚI CÔNG TY MÔI TRƯỜNG Á CHÂU</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{
            textAlign:'center',
            
        }}>ĐĂNG NHẬP BẰNG GOOGLE</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#086db5',
        padding:16,
        borderRadius:19,
        marginTop:40
    }
})