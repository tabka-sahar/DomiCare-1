import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Card } from "react-native-shadow-cards";
import { Avatar, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../Authentification/CredentialsContext.js";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import moment from "moment";


const ServicesRequests = () => {
  const [feed, setFeed] = useState([]);
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialsContext);
  const userData = storedCredentials.userData;
  const navigation = useNavigation();

  useEffect(async () => {
    console.log("feed", feed);
    try {
      const posts = await axios.get(
        `http://192.168.11.61:3000/Posts/servicesrequests`
      );
      setFeed(posts.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const OfferMysService = async (e) => {
    const postid = e._id;
    const providerId = userData._id;
    const seekerId = e.serviceSeeker_id;
    const type = "offer";

    const offer = await axios.post(
      `http://192.168.11.61:3000/Transactions/OfferMyService`,
      { type, postid, providerId, seekerId }
    );
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Button
          onPress={() => navigation.navigate("ServiceSeekerAddPost")}
          title="post an offer request"
          color="teal"
          accessibilityLabel="Learn more about this purple button"
        />

        {feed.map((e, key) => {
          console.log('e',e)
          return (
            <View style={styles.container} key={key}>
              <Card style={{ padding: 10, margin: 10 }} >
                <Text style={{ marginLeft: 270 }}>{e.createdAT}</Text>

                <Avatar
                  bg="green.500"


                  
                  size="md"
                  source={{
                    uri: e.serviceSeeker_id.picture
                  }}
                ></Avatar>
                <Text> By:{e.serviceSeeker_id.userName}</Text>
                <Text>city:{e.city}</Text>
                <Text>Date:{e.startDate}-{e.endDate}</Text>
                <Text>Details:{e.content}</Text>
                <Button
                  onPress={() => {
                    OfferMysService(e);
                  }}
                  title="Offer my services"
                  color="teal"
                  accessibilityLabel="Learn more about this purple button"
                />
              </Card>
            </View>
          );
        })}
      </ScrollView>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ServicesRequests;
