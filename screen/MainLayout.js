import React, { useEffect, useRef } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { actSetSelTab } from '../store/tab/tabActions'
import SCREEN_LIST from '../data/mock'
import Home from './Home'
import Cart from './Cart'
import Notification from './Notification'
import LinearGradient from 'react-native-linear-gradient'

const { width } = Dimensions.get('screen')
const MainLayout = ({
    navigation,
    sta2PropSelTab, dis2PropSetSelTab
}) => {
    const cnst_is_home = sta2PropSelTab === 'Home'
    const cnst_is_cart = sta2PropSelTab === 'Cart'
    const cnst_is_notification = sta2PropSelTab === 'Notification'
    const flatListRef = useRef()
    // --- animated
    const homeTabFlex = useSharedValue(1)
    const cartTabFlex = useSharedValue(1)
    const notiTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue('white')
    const cartTabColor = useSharedValue('white')
    const notiTabColor = useSharedValue('white')
    const homeFlexStyle = useAnimatedStyle(() => {
        return { flex: homeTabFlex.value }
    })
    const homeColorStyle = useAnimatedStyle(() => {
        return { backgroundColor: homeTabColor.value }
    })
    const cartFlexStyle = useAnimatedStyle(() => {
        return { flex: cartTabFlex.value }
    })
    const cartColorStyle = useAnimatedStyle(() => {
        return { backgroundColor: cartTabColor.value }
    })
    const notiFlexStyle = useAnimatedStyle(() => {
        return { flex: notiTabFlex.value }
    })
    const notiColorStyle = useAnimatedStyle(() => {
        return { backgroundColor: notiTabColor.value }
    })
    useEffect(() => {
        if (cnst_is_home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false,
            })
            homeTabFlex.value = withTiming(2, { duration: 300 })
            homeTabColor.value = withTiming('orange', { duration: 300 })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 300 })
            homeTabColor.value = withTiming('white', { duration: 300 })
        }
        if (cnst_is_cart) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false,
            })
            cartTabFlex.value = withTiming(2, { duration: 300 })
            cartTabColor.value = withTiming('orange', { duration: 300 })
        } else {
            cartTabFlex.value = withTiming(1, { duration: 300 })
            cartTabColor.value = withTiming('white', { duration: 300 })
        }
        if (cnst_is_notification) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false,
            })
            notiTabFlex.value = withTiming(2, { duration: 300 })
            notiTabColor.value = withTiming('orange', { duration: 300 })
        } else {
            notiTabFlex.value = withTiming(1, { duration: 300 })
            notiTabColor.value = withTiming('white', { duration: 300 })
        }
    }, [sta2PropSelTab])
    // --- animated
    useEffect(() => {
        dis2PropSetSelTab('Home')
    }, [])
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: 50,
                    alignItems: 'center',
                }}
            >
                {/* Left */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                    }}
                    onPress={() => navigation.openDrawer()}
                >
                    <Image
                        source={{ uri: 'https://image.shutterstock.com/image-vector/hamburger-menu-icon-vector-illustration-600w-524062378.jpg' }}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                </TouchableOpacity>
                {/* Title */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        {sta2PropSelTab.toUpperCase()} SCREEN
                    </Text>
                </View>
                {/* Right */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={{ uri: 'https://i.ibb.co/SNjFd9B/do-tranquang.jpg' }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 15,
                        }}
                    />
                </TouchableOpacity>
            </View>
            {/* Content */}
            <View
                style={{
                    flex: 1,
                }}
            >
                <FlatList
                    ref={flatListRef}
                    scrollEnabled={false}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    data={SCREEN_LIST}
                    keyExtractor={item_data => `${item_data.id}`}
                    renderItem={() => {
                        return (
                            <View
                                style={{
                                    width: width,
                                }}
                            >
                                {cnst_is_home && <Home />}
                                {cnst_is_cart && <Cart />}
                                {cnst_is_notification && <Notification />}
                            </View>

                        )
                    }}
                />
            </View>
            {/* Footer */}
            <View
                style={{
                    height: 50,
                    justifyContent: 'flex-end',
                }}
            >
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 2 }}
                    colors={[
                        'transparent',
                        '#DDDDDD',
                    ]}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                    }}
                />
                {/* Tab */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        paddingBottom: 10,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        backgroundColor: 'white',
                    }}
                >
                    {/* Home */}
                    <TouchableWithoutFeedback
                        onPress={() => dis2PropSetSelTab('Home')}
                    >
                        <Animated.View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...homeFlexStyle,
                            }}
                        >
                            <Animated.View
                                style={{
                                    flexDirection: 'row',
                                    width: '40%',
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                    ...homeColorStyle,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: cnst_is_home ? 'white' : 'gray',
                                        fontSize: 25,
                                    }}
                                >
                                    Home
                                </Text>
                            </Animated.View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    {/* Cart */}
                    <TouchableWithoutFeedback
                        onPress={() => dis2PropSetSelTab('Cart')}
                    >
                        <Animated.View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...cartFlexStyle,
                            }}
                        >
                            <Animated.View
                                style={{
                                    flexDirection: 'row',
                                    width: '40%',
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                    ...cartColorStyle,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: cnst_is_cart ? 'white' : 'gray',
                                        fontSize: 25,
                                    }}
                                >
                                    Cart
                                </Text>
                            </Animated.View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    {/* Notification */}
                    <TouchableWithoutFeedback
                        onPress={() => dis2PropSetSelTab('Notification')}
                    >
                        <Animated.View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...notiFlexStyle,
                            }}
                        >
                            <Animated.View
                                style={{
                                    flexDirection: 'row',
                                    width: '40%',
                                    height: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                    ...notiColorStyle,
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: cnst_is_notification ? 'white' : 'gray',
                                        fontSize: 25,
                                    }}
                                >
                                    Notification
                                </Text>
                            </Animated.View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
