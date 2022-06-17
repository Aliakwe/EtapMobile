import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {COLORS, BORDERRADIUS, SPACING, HP, WP} from '../utils/themes';

function SearchInput({
  onChangeText,
  value,
  placeholder,
  handleSearchButtonPress,
  ...rest
}) {
  return (
    <View style={{...styles.searchContainer}} {...rest}>
      <View style={styles.searchInput}>
        <Icon name={'search'} size={HP('2%')} color={COLORS.midGrey} />
        <TextInput
          style={{
            width: '90%',
            height: '100%',
            paddingLeft: SPACING.xxxsmall,
          }}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? HP('4%') : HP('5%'),
    backgroundColor: COLORS.smokeWhite,
    borderColor: COLORS.smokeWhite,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: BORDERRADIUS.medium,
  },
  searchInput: {
    // backgroundColor: COLORS.white,
    // borderRadius: BORDERRADIUS.small,
    width: '85%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SPACING.xxxsmall,
  },

  bottonSearch: {
    width: '10%',
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: BORDERRADIUS.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(SearchInput);
