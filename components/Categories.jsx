import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "../constants/data";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Animated, { FadeInRight } from "react-native-reanimated";

const Categories = ({ activeCategory, handleActiveCategory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          isActive={activeCategory == item}
          handleActiveCategory={handleActiveCategory}
          title={item}
          index={index}
        />
      )}
    />
  );
};
const CategoryItem = ({ title, index, isActive, handleActiveCategory }) => {
  let color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let backgroundColor = isActive
    ? theme.colors.neutral(0.8)
    : theme.colors.white;
  //   console.log("color:", color);
  //   console.log("backgroundColor:", backgroundColor);

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 200)
        .duration(1000)
        .springify()
        .damping(14)}
    >
      <Pressable
        onPress={() => handleActiveCategory(isActive ? null : title)}
        style={[
          styles.category,
          {
            backgroundColor,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              color,
            },
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayGb,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fonts.medium,
  },
});
