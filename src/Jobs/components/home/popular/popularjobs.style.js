import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: 'sans-serif',
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: 'sans-serif',
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
