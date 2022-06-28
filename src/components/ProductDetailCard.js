import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
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
  BOXWITHSHADOW,
} from '../utils/themes';
import {currencyFormat} from '../utils/constants';

function ProductDetailCard({data, onPressBackBtn}) {
  const {
    title,
    price,
    category,
    image,
    description,
    rating: {rate, count},
  } = data;
  return (
    <View style={{...styles.container}}>
      <View style={{...styles.imageContainer}}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            ...styles.imageStyle,
          }}
        />
        <TouchableOpacity
          onPress={onPressBackBtn}
          style={{
            ...styles.backBtnContainer,
          }}>
          <Icon
            name={'chevron-left'}
            size={HP('3%')}
            color={COLORS.lightGrey}
          />
        </TouchableOpacity>
        <View
          style={{
            ...styles.priceContainer,
          }}>
          <CustomText bold xxlarge>
            {currencyFormat(parseFloat(price))}
          </CustomText>
        </View>
      </View>
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
        <View style={{...styles.secondContent}}></View>
      </View>
      <View>
        <CustomText
          base
          color={COLORS.helperGray}
          style={{
            marginTop: SPACING.xxsmall,
            paddingHorizontal: SPACING.xxsmall,
          }}>
          {description}
        </CustomText>
      </View>
    </View>
  );
}

ProductDetailCard.propTypes = {
  onPressBackBtn: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.lightGrey,
    borderBottomWidth: HP('0.1%'),
    borderStyle: 'solid',
    paddingBottom: SPACING.xxsmall,
    marginTop: Platform.OS === 'ios' ? SPACING.small : SPACING.xxxsmall,
  },

  imageContainer: {
    height: HP('60%'),
  },

  imageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  backBtnContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? HP('2%') : HP('1.5%'),
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.mini,
    borderRadius: BORDERRADIUS.medium,
    left: SPACING.xxsmall,
    ...BOXWITHSHADOW,
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

export default React.memo(ProductDetailCard);
