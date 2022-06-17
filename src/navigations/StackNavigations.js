import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Products Modules screens
import Products from '../screens/Products';
import ProductDetail from '../screens/Products/ProductDetail';

// Liked products screens
import ProductsLiked from '../screens/ProductsLiked';

const Stack = createStackNavigator();

export function ProductsModules({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function ProductLikedModules({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="ProductsLiked"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="ProductsLiked" component={ProductsLiked} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
