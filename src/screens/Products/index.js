import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  RefreshControl,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import CustomText from '../../components/CustomText';
import SearchInput from '../../components/SearchInput';
import ProductCard from '../../components/ProductCard';

import {COLORS, SPACING} from '../../utils/themes';
import {normaliseCase} from '../../utils/constants';
import {
  getProductsRequest,
  getProductsCleanUp,
} from '../../store/api/get-products';

import {likedProductsRequest} from '../../store/api/liked-products';

function Products({navigation}) {
  const dispatch = useDispatch();
  // state
  const [productData, setProductData] = React.useState([]);
  const [searchData, setSearchData] = React.useState([]);
  const [searchedText, setSearchText] = React.useState('');

  // REDUX STATE
  const getProductsState = useSelector(s => s.getProducts);

  // // api call
  React.useEffect(() => {
    async function getProductFunc() {
      dispatch(getProductsRequest());
    }
    getProductFunc();
  }, []);

  React.useEffect(() => {
    if (getProductsState?.error !== null && !getProductsState.isSuccessful) {
      showMessage({
        type: 'danger',
        message: 'error occured',
      });
      dispatch(getProductsCleanUp());
    } else {
      var reconstructedData = [];
      getProductsState?.result.forEach(element => {
        reconstructedData.push({
          ...element,
          like: false,
          likeCount: 0,
        });
      });

      setProductData(reconstructedData);
      setSearchData(reconstructedData);
    }
  }, [getProductsState]);

  const onRefresh = () => {
    dispatch(getProductsCleanUp());
  };

  const handleUserLike = item => {
    const itemToEdit = item;

    const updatedProduct = [...productData].map(el => {
      if (el.id === itemToEdit.id) {
        if (el.likeCount < 2) {
          // if count is let than 2 add count
          el.likeCount = el.likeCount + 1;
        } else {
          // reset count if count is more than 2
          el.likeCount = 0;
        }
      }
      return el;
    });

    setProductData(updatedProduct);

    // now store all products that there count is equal 2 because it takes 2 times press to like a data
    const allLikedItems = updatedProduct.filter(item => {
      return item.likeCount === 2;
    });

    dispatch(likedProductsRequest(allLikedItems));
  };

  const renderItem = ({item}) => {
    return (
      <ProductCard
        onPress={() => navigation.navigate('ProductDetail', {screenData: item})}
        data={item}
        onPressUserLike={() => handleUserLike(item)}
      />
    );
  };

  const searchFilterFunction = text => {
    // Check if searched text is not blank

    if (text) {
      setSearchText(text);
      const allSearchData = searchData.filter((item, index) => {
        const {title, price, category} = item;

        let priceSearch = price;
        let categorySearch = normaliseCase(category);
        let titleSearch = normaliseCase(title);
        let numalisedText = normaliseCase(text);

        return (
          categorySearch.indexOf(numalisedText) > -1 ||
          titleSearch.indexOf(numalisedText) > -1 ||
          text <= priceSearch
        );
      });

      setSearchData(allSearchData);
      setSearchText(text);
    } else {
      setSearchData(productData);
      setSearchText(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <CustomText center semibold color={COLORS.secondary}>
        Products
      </CustomText>

      <View
        style={{
          paddingHorizontal: SPACING.xxsmall,
          marginTop: SPACING.xxsmall,
        }}>
        <SearchInput
          placeholder={'Search products'}
          value={searchedText}
          onChangeText={text => searchFilterFunction(text)}
        />
      </View>

      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={getProductsState.isLoading}
            onRefresh={onRefresh}
          />
        }
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
});
export default Products;
