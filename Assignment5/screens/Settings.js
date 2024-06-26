

import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 import { Switch } from 'react-native-paper';
//  import { useColorScheme } from 'nativewind';

export default function Settings() {
//   const   {colorScheme} = useColorScheme()
//   const [isDarkMode, setIsDarkMode] = React.useState(colorScheme === 'dark');

//    const toggleColorScheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
  return (
    <View style={{ top:hp('8%'),padding:20}}>

        <View style={{}}>
            <Text style={{
                 fontSize: 29,
                fontWeight:700,
                alignText:'center',
                
                }}>Settings</Text>
        </View>

{/* LIST */}
        <View style={{ marginTop:hp('10%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 24,
                    fontWeight:500,
                    }}>Language</Text>
                    <Fontisto name="angle-right" size={21} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('3%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('3%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 24,
                    fontWeight:500,
                    }}>My Profile</Text>
                    <Fontisto name="angle-right" size={21} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('3%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('3%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 24,
                    fontWeight:500,
                    }}>Contact Us</Text>
                    <Fontisto name="angle-right" size={21} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('3%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('3%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 24,
                    fontWeight:500,
                    }}>Change Password</Text>
                    <Fontisto name="angle-right" size={21} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('3%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('3%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 24,
                    fontWeight:500,
                    }}>Privacy Policy</Text>
                    <Fontisto name="angle-right" size={21} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('3%'),
             }}>
            
            </View>
        </View>

        {/* THEME */}

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('6%')}}>
            <Text style={{fontSize:30,fontWeight:500,}}>
                Theme
            </Text>

          

            <View>
      {/* <Text>Current Color Scheme: {colorScheme}</Text> */}
      <Switch
    //    value={isDarkMode} onValueChange={toggleColorScheme}
        />
    </View>


        </View>
     
    </View>
  )
}