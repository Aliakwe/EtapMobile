import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';

import {COLORS, BORDERRADIUS, HP, SPACING} from '../utils/themes';

import CustomText from './CustomText';

function CustomInput(props) {
  const {
    placeholder,
    label,
    value,
    onChangeText,

    onFocus,
    style,
    secureTextEntry,

    error,

    keyboardType,

    inputRef,

    editable,
  } = props;
  return (
    <View style={styles.container}>
      {label && (
        <CustomText base style={styles.labelText}>
          {label}
        </CustomText>
      )}

      <View>
        <View
          style={{
            height: Platform.OS == 'android' ? HP('5.5%') : HP('5%'),
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor:
              error && error.length > 1 ? COLORS.error : COLORS.lightWhite,
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: COLORS.smokeWhite,
            paddingHorizontal: SPACING.xxxsmall,
            borderRadius: BORDERRADIUS.small,
            ...style,
          }}>
          <TextInput
            keyboardType={keyboardType}
            placeholderTextColor={COLORS.placeholderGrey}
            style={[
              {
                height: '100%',
                width: '100%',
                lineHeight: Platform.OS === 'android' ? 20 : 0,
                fontFamily: 'Montserrat-Medium',
                color: COLORS.descText,
              },
            ]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            value={value}
            autoCorrect={false}
            selectTextOnFocus={true}
            autoCompleteType="off"
            autoCapitalize="none"
            multiline={false}
            onFocus={onFocus}
            ref={inputRef}
            editable={editable}
            {...props}
          />
        </View>

        {error && error.length > 1 && (
          <CustomText small error>
            {error}
          </CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: SPACING.xxsmall,
  },
  labelText: {
    color: COLORS.greyDark,
    marginBottom: SPACING.mini,
  },

  selectTextStyle: {
    color: COLORS.greyDark,
  },
  numberStyle: {
    minHeight: 40,
    borderRadius: BORDERRADIUS.medium,
    width: '100%',

    alignItems: 'center',
    alignSelf: 'center',

    color: COLORS.black,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: COLORS.black,
  },
  errorStyle: {
    color: COLORS.red,
  },
});

export default React.memo(CustomInput);
