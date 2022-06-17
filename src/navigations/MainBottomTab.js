import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {ProductsModules, ProductLikedModules} from './StackNavigations';

import {
  HP,
  COLORS,
  BORDERRADIUS,
  SPACING,
  BOXWITHSHADOW,
} from '../utils/themes';

const Tab = createBottomTabNavigator();

function CustomeIcon(props) {
  const {
    onPress,
    to,
    item: {label, icon},
    accessibilityState: {selected},
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        ...styles.customeIconContainer,
      }}
      onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <Icon
          name={icon}
          color={selected ? COLORS.primary : COLORS.lightWhite}
          size={HP('3%')}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function MainBottomTab() {
  // this function decides at what screen bottom tabs are no longer visible

  const bottomTabArr = [
    {
      route: 'ProductsTab',
      label: 'Home',
      component: ProductsModules,
      icon: 'home',
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.red,
    },
    {
      route: 'ProductLikedModules',
      label: 'Liked',
      icon: 'heart',
      component: ProductLikedModules,
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.red,
    },
  ];

  function getTabBarVisibility(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Products';
    if (routeName == 'Products' || routeName == 'ProductLiked') {
      return 'flex';
    }
    return 'none';
  }

  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}>
      {bottomTabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={({route}) => ({
              tabBarShowLabel: false,
              tabBarButton: props => <CustomeIcon {...props} item={item} />,
              tabBarStyle: {
                display: getTabBarVisibility(route),
                height: Platform.OS == 'android' ? HP('8%') : HP('8%'),
                paddingTop: SPACING.xxsmall,
                backgroundColor: COLORS.lightGrey,

                borderTopLeftRadius: HP('5%'),
                borderTopRightRadius: HP('5%'),
                ...BOXWITHSHADOW,
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  customeIconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
});
