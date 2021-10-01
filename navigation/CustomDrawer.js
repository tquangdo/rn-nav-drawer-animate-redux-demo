import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import MainLayout from '../screen/MainLayout'
import { actSetSelTab } from '../store/tab/tabActions'

const Drawer = createDrawerNavigator()
const { width } = Dimensions.get('screen')
const CustomDrawer = ({
    sta2PropSelTab, dis2PropSetSelTab,
}) => {
    const cnst_is_home = sta2PropSelTab === 'Home'
    const cnst_is_cart = sta2PropSelTab === 'Cart'
    const cnst_is_notification = sta2PropSelTab === 'Notification'
    const cnst_screen_opt = () => ({
        drawerStyle: {
            backgroundColor: 'orange',
        }
    })
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Drawer.Navigator
                screenOptions={cnst_screen_opt}
                drawerType='slide'
                drawerStyle={{
                    width: 2 * width / 3,
                    paddingRight: 15,
                }}
                initialRouteName='MainLayout'
                drawerContent={arg_props => {
                    const { navigation } = arg_props
                    return (
                        <DrawerContentScrollView
                            scrollEnabled={true}
                            contentContainerStyle={{
                                flex: 1,
                            }}
                        >
                            {/* CLose */}
                            <View
                                style={{
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onPress={() => navigation.closeDrawer()}
                                >
                                    <Text>❎</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Profile */}
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 15,
                                    alignItems: 'center',
                                    marginLeft: 15,
                                }}
                                onPress={() => alert('Profile')}
                            >
                                <Image
                                    source={{ uri: 'https://i.ibb.co/SNjFd9B/do-tranquang.jpg' }}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 15,
                                    }}
                                />
                                <View
                                    style={{
                                        marginLeft: 15,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        DoTQ
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            {/* Items */}
                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 15,
                                }}
                            >
                                {/* Home */}
                                <TouchableOpacity
                                    style={{
                                        // copy paste
                                        flexDirection: 'row',
                                        height: 40,
                                        marginBottom: 15,
                                        alignItems: 'center',
                                        paddingLeft: 15,
                                        borderRadius: 15,
                                        backgroundColor: cnst_is_home ? '#DDDDDD' : null,
                                    }}
                                    onPress={() => {
                                        dis2PropSetSelTab('Home')
                                        navigation.navigate('MainLayout')
                                    }}
                                >
                                    <Text>
                                        Home
                                    </Text>
                                </TouchableOpacity>
                                {/* Cart */}
                                <TouchableOpacity
                                    style={{
                                        // copy paste
                                        flexDirection: 'row',
                                        height: 40,
                                        marginBottom: 15,
                                        alignItems: 'center',
                                        paddingLeft: 15,
                                        borderRadius: 15,
                                        backgroundColor: cnst_is_cart ? '#DDDDDD' : null,
                                    }}
                                    onPress={() => {
                                        dis2PropSetSelTab('Cart')
                                        navigation.navigate('MainLayout')
                                    }}
                                >
                                    <Text>
                                        Cart
                                    </Text>
                                </TouchableOpacity>
                                {/* Notification */}
                                <TouchableOpacity
                                    style={{
                                        // copy paste
                                        flexDirection: 'row',
                                        height: 40,
                                        marginBottom: 15,
                                        alignItems: 'center',
                                        paddingLeft: 15,
                                        borderRadius: 15,
                                        backgroundColor: cnst_is_notification ? '#DDDDDD' : null,
                                    }}
                                    onPress={() => {
                                        dis2PropSetSelTab('Notification')
                                        navigation.navigate('MainLayout')
                                    }}
                                >
                                    <Text>
                                        Notification
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* Logout */}
                            <View
                                style={{
                                    margin: 15,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('OnBoarding')}
                                >
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: 'purple',
                                        }}
                                    >
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </DrawerContentScrollView>
                    )
                }}
            >
                <Drawer.Screen
                    options={{
                        headerShown: false,
                    }}
                    name='MainLayout'
                >
                    {props => <MainLayout
                        {...props}
                    />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        sta2PropSelTab: state.tabReducer.selTab,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dis2PropSetSelTab: arg_sel_tab => {
            return dispatch(actSetSelTab(arg_sel_tab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
