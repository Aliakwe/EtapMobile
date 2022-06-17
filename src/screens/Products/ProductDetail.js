import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import CustomText from '../../components/CustomText';
import ProductDetailCard from '../../components/ProductDetailCard';
import {COLORS, IMAGES} from '../../utils/themes';

function ProductDetail({route, navigation}) {
  const {screenData} = route.params;

  return (
    <View style={styles.container}>
      <ProductDetailCard
        data={screenData}
        onPressBackBtn={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default ProductDetail;
