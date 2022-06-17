import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import CustomText from './CustomText';
import {
  COLORS,
  SPACING,
  BORDERRADIUS,
  HP,
  WP,
  BOXWITHSMALLSHADOW,
  BOXWITHSHADOW,
} from '../utils/themes';
import {currencyFormat} from '../utils/constants';

function ProductCard({data, onPress, onPressUserLike}) {
  const {
    title,
    price,
    category,
    image,
    rating: {rate, count},
    likeCount,
  } = data;

  return (
    <View style={{...styles.container}}>
      <TouchableOpacity onPress={onPress} style={{...styles.imageContainer}}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            ...styles.imageStyle,
          }}
        />
        <View
          style={{
            ...styles.priceContainer,
          }}>
          <CustomText bold xxlarge>
            {currencyFormat(parseFloat(price))}
          </CustomText>
        </View>
      </TouchableOpacity>
      <View
        style={{
          ...styles.content,
        }}>
        <View style={{...styles.firstContent}}>
          <CustomText semibold>{title}</CustomText>
          <CustomText style={{...styles.productType}} base>
            {category}
          </CustomText>
          <View
            style={{
              ...styles.ratingContainer,
            }}>
            <Icon
              name={'star'}
              size={HP('2%')}
              color={COLORS.iconGrey}
              style={{marginRight: SPACING.mini}}
            />
            <CustomText base color={COLORS.helperGray}>
              {rate}
            </CustomText>
            <View
              style={{
                ...styles.horizontalLine,
              }}
            />
            <CustomText base style={{marginRight: SPACING.mini}}>
              {count}
            </CustomText>
            <CustomText base color={COLORS.helperGray}>
              available
            </CustomText>
          </View>
        </View>
        <View style={{...styles.secondContent}}>
          <Icon
            onPress={onPressUserLike}
            name="heart"
            size={HP('3%')}
            color={likeCount === 2 ? COLORS.error : COLORS.descText}
          />
        </View>
      </View>
    </View>
  );
}

ProductCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.lightGrey,
    borderBottomWidth: HP('0.1%'),
    borderStyle: 'solid',
    paddingBottom: SPACING.xxsmall,
    marginTop: SPACING.xsmall,
  },

  imageContainer: {
    height: HP('25%'),
  },

  imageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  priceContainer: {
    ...BOXWITHSHADOW,
    position: 'absolute',
    right: 0,
    bottom: HP('-2.5%'),
    backgroundColor: COLORS.white,
    alignSelf: 'flex-start',
    borderRadius: BORDERRADIUS.xlarge,
    paddingHorizontal: SPACING.xxsmall,
    paddingVertical: SPACING.xxxsmall,
    marginRight: SPACING.xxsmall,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.small,
    paddingHorizontal: SPACING.xxsmall,
    marginRight: SPACING.xxsmall,
  },

  firstContent: {
    width: '90%',
  },
  secondContent: {
    width: '10%',
  },

  productType: {
    marginVertical: SPACING.mini,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  horizontalLine: {
    height: 1,
    width: WP('2%'),
    backgroundColor: COLORS.iconGrey,
    marginHorizontal: SPACING.xxxsmall,
  },
});

export default React.memo(ProductCard);
