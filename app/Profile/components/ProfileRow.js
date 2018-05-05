import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body,
  Card,
  CardItem
} from "native-base";

export default class ProfileRow extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardItem header>
            <Text>highlights</Text>
          </CardItem>
          {this.props.item.map(res => (
            <CardItem bordered>
              <Thumbnail
                size={80}
                source={{
                  uri:
                    "https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png"
                }}
              />
              <Body style={styles.body}>
                <Text style={styles.title}>{res.title}</Text>
                <Text style={styles.desc}>{res.description}</Text>
              </Body>
            </CardItem>
          ))}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  },
  desc: {
    fontSize: 13
  }
});
