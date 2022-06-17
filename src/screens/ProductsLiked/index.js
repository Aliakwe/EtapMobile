import React from 'react';
import {View, StyleSheet, StatusBar, FlatList, Image} from 'react-native';

import {useSelector} from 'react-redux';
import CustomText from '../../components/CustomText';
import ProductCard from '../../components/ProductCard';
import {COLORS, SPACING, IMAGES, HP, WP} from '../../utils/themes';

function ProductsLiked({navigation}) {
  const [likeData, setLikedData] = React.useState([]);

  // Redux states
  const likedProductsState = useSelector(s => s.likedProducts.result);

  React.useEffect(() => {
    const removeDuplicatesLikedProductsState = [...new Set(likedProductsState)];
    setLikedData(removeDuplicatesLikedProductsState);
  }, [likedProductsState]);

  function EmptyState() {
    return (
      <View
        style={{
          ...styles.emptyStateContainer,
        }}>
        <View style={{height: HP('10%'), width: WP('25%')}}>
          <Image
            source={IMAGES.emptyImage}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <CustomText center base style={{marginTop: SPACING.xxsmall}}>
          Like product to sse liked products
        </CustomText>
      </View>
    );
  }

  const renderItem = ({item}) => {
    return (
      <ProductCard
        onPress={() => navigation.navigate('ProductDetail', {screenData: item})}
        data={item}
        onPressUserLike={() => console.log('hello')}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <CustomText center semibold color={COLORS.secondary}>
        Liked Products
      </CustomText>
      <FlatList
        data={likeData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyState />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'ios' ? SPACING.medium : SPACING.xxsmall,
  },

  emptyStateContainer: {
    flex: 1,
    marginTop: SPACING.xxxlarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProductsLiked;
