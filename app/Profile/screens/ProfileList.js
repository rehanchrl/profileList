import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Right,
  Left,
  Thumbnail,
  Button,
  Spinner
} from "native-base";

import { connect } from "react-redux";
import { FetchProfile } from "../action";

import ProfileRow from "../components/ProfileRow";

class ProfileList extends Component {
  componentDidMount() {
    this.props.dispatch(FetchProfile());
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.profileReducer.isLoading ? (
            <Spinner color="red" />
          ) : (
            this.props.profileReducer.profile.map(res => (
              <View>
                <Card>
                  <CardItem>
                    <Content>
                      <View style={styles.container}>
                        <Image
                          style={{ width: 150, height: 150, borderRadius: 150 }}
                          source={{
                            uri:
                              "https://www.walldevil.com/wallpapers/a92/beautiful-wallpapers-pcwallpapers-girlswallpapers-girls-girl-allimg-china.jpg"
                          }}
                        />
                        <Text style={styles.name}>{res.name}</Text>
                        <Text style={styles.job}>{res.job} at</Text>
                        <Text style={styles.job}>{res.company}</Text>
                        <Text style={styles.detail}>
                          {res.university} . {res.city}
                        </Text>
                        <Text style={styles.detail}>{res.town}</Text>
                        <View
                          style={{
                            flexDirection: "row"
                          }}
                        >
                          <Button bordered style={styles.button}>
                            <Text>Message</Text>
                          </Button>
                          <Button primary style={styles.button}>
                            <Text> Connect </Text>
                          </Button>
                        </View>
                        <Text style={styles.desc}>{res.description}</Text>
                      </View>
                    </Content>
                  </CardItem>
                </Card>
                <ProfileRow item={res.highlights} nav={this.props} />
              </View>
            ))
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  name: {
    fontSize: 20
  },
  job: {
    fontSize: 18
  },
  detail: {
    fontSize: 15
  },
  desc: {
    fontSize: 12
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 15
  }
});

const mapStateToProps = state => ({
  profileReducer: state.profileReducer
});

export default connect(mapStateToProps)(ProfileList);
