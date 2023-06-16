import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItems from "../components/ListItems";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ItemSeperatorView from "../components/ItemSeperatorView";

const MenuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Ajeigbe Paul"
          subTitle="pdave4krist@yahoo.com"
          image={require("../assets/profilepics.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={MenuItems}
          keyExtractor={(menuitem) => menuitem.title}
          ItemSeparatorComponent={ItemSeperatorView}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItems title="Logout" ImageComponent={<Icon name="logout" backgroundColor={colors.logout}/>}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
