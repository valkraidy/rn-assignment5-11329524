import { View, Text,SafeAreaView,Image,ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Home() {
  return (
    <SafeAreaView
    style={{flex:1,top:hp('5%'),paddingLeft:15,paddingRight:15}}
    
    >
        {/* /<Hearder/> */}

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <View>
                <Image
                source= {require('../assets/profile.png')}
                style={{height:60,width:60}}
                />
                
            </View>
  
            <View>
                <Text style={{fontSize:24,color:'gray'}}>Welcome back, </Text>
                <Text style={{fontSize:25,color:'#000',fontWeight:600}}>Eric Atsu</Text>
            </View>
            <View

            style={{
                 height:60,
                width:60,
                backgroundColor:'#E8E8E8',
                borderRadius:50,
             justifyContent:'center',
            }}>
                <AntDesign name="search1" size={24} color="black"
                style={{left:20}}/>
                
            </View>
        </View>
  
  {/* Card */}
        <View
        style={{
          padding:10,
          justifyContent:'center',
          alignItem:'center',
       
            width:wp('100%'), 
         }}
        >
        

        <Image
        source={require('../assets/Card.png')}
        style={{alignItems:'center', justifyContent: 'center',height:220,width:370}}
        />
        
      
            
        </View>

     {/* Categories    */}
        <View style={{top:hp('2%'),flexDirection:'row',justifyContent:'space-between'}}>

            <View

            style={{
                 height:60,
                width:60,
                backgroundColor:'#E8E8E8',
                borderRadius:50,
             justifyContent:'center',
            }}>
                 <Text style={{top:hp('6.5%'),left:10,fontSize:19}}>Sent</Text>
                <AntDesign name="arrowup" size={24} color="black" 
                style={{left:20,bottom:10}}
                />
          
                
            </View>
            

             <View

            style={{
                 height:60,
                width:60,
                backgroundColor:'#E8E8E8',
                borderRadius:50,
             justifyContent:'center',
            }}>
                 <Text style={{top:hp('6.5%'),left:10,fontSize:17.5}}>Recieve</Text>
               <AntDesign name="arrowdown" size={24} color="black" 
                style={{left:20,bottom:10}}/>
                
            </View>
             <View

            style={{
                 height:60,
                width:60,
                backgroundColor:'#E8E8E8',
                borderRadius:50,
             justifyContent:'center',
            }}>
                 <Text style={{top:hp('6.5%'),left:14,fontSize:19}}>Loan</Text>
              <Image
               source={require('../assets/loan.png')}
                style={{left:20,bottom:10}}/>
                
                
            </View>
             <View

            style={{
                 height:60,
                width:60,
                backgroundColor:'#E8E8E8',
                borderRadius:50,
             justifyContent:'center',
            }}>
                   <Text style={{top:hp('6.5%'),left:10,fontSize:19}}>Topup</Text>
               <Image
               source={require('../assets/topUp.png')}
                style={{left:20,bottom:10}}/>

             
                
            </View>
      </View >

           

        
        <View style={{top:hp('6%'),flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:24,fontWeight:600}}>Transaction</Text>
              <Text style={{fontSize:24,color:'#3DC2EC',fontWeight:600}}>Sell All</Text>

        </View>
        <View style={{top:hp('7%'),}}>


            <View style={{justifyContent:'space-between'}}>


             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                {/* new */}
                <View style={{flexDirection:'row',top:hp('2%')}}>

                    <View

                    style={{
                    height:60,
                    width:60,
                    backgroundColor:'#E8E8E8',
                    borderRadius:50,
                    justifyContent:'center',
                    }}>
                            <Image
                            source={require('../assets/apple.png')}
                            style={{left:20,height:30,width:23}}/>
                    </View>

                    <View style={{left:28}}>
                        <Text style={{fontSize:24,fontWeight:500}}>Apple Store</Text>
                        <Text  style={{fontSize:18,fontWeight:500,color:'gray'}}>Entertainment</Text>
                    </View>
              </View>
              
                    <View>
                            <Text style={{fontSize:24,fontWeight:500}}> -$5,99</Text>
                        </View>
                        


            </View>

             <View style={{flexDirection:'row',justifyContent:'space-between',top:hp('4%')}}>
                {/* new */}
                <View style={{flexDirection:'row'}}>

                    <View

                    style={{
                    height:60,
                    width:60,
                    backgroundColor:'#E8E8E8',
                    borderRadius:50,
                    justifyContent:'center',
                    }}>
                            <Image
                            source={require('../assets/spotify.png')}
                            style={{left:17,
                                height:30,width:29
                            }}
                            />
                    </View>

                    <View style={{left:28}}>
                        <Text style={{fontSize:24,fontWeight:500}}>Spotify</Text>
                        <Text  style={{fontSize:18,fontWeight:500,color:'gray'}}>Music</Text>
                    </View>
              </View>
              
                    <View>
                            <Text style={{fontSize:24,fontWeight:500}}> -$12,99</Text>
                        </View>
                        


            </View>

             <View style={{flexDirection:'row',justifyContent:'space-between',top:hp('6%')}}>
                {/* new */}
                <View style={{flexDirection:'row'}}>

                    <View

                    style={{
                    height:60,
                    width:60,
                    backgroundColor:'#E8E8E8',
                    borderRadius:50,
                    justifyContent:'center',
                    }}>
                            <Image
                            source={require('../assets/moneyTransfer.png')}
                            style={{left:20,height:30,width:23}}/>
                    </View>

                    <View style={{left:28}}>
                        <Text style={{fontSize:24,fontWeight:500}}>Money Transfer</Text>
                        <Text  style={{fontSize:18,fontWeight:500,color:'gray'}}>Transaction</Text>
                    </View>
              </View>
              
                    <View>
                            <Text style={{fontSize:24,fontWeight:500,color:'#3DC2EC'}}> $300</Text>
                        </View>
                        


            </View>

             <View style={{flexDirection:'row',justifyContent:'space-between',top:hp('8%')}}>
                {/* new */}
                <View style={{flexDirection:'row'}}>

                    <View

                    style={{
                    height:60,
                    width:60,
                    backgroundColor:'#E8E8E8',
                    borderRadius:50,
                    justifyContent:'center',
                    }}>
                            <Image
                            source={require('../assets/grocery.png')}
                            style={{left:17,height:30,width:29}}/>
                    </View>

                    <View style={{left:28}}>
                        <Text style={{fontSize:24,fontWeight:500}}>Apple Store</Text>
                        <Text  style={{fontSize:18,fontWeight:500,color:'gray'}}>Entertainment</Text>
                    </View>
              </View>
              
                    <View>
                            <Text style={{fontSize:24,fontWeight:500}}> -$88</Text>
                        </View>
                        


            </View>

         




        </View>

        </View>
   

  <StatusBar style="light" />
      
    </SafeAreaView>
  )
}
