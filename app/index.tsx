import { Text, View } from "react-native";
import { next as Automerge } from "@automerge/automerge/slim";
import { Repo } from "@automerge/automerge-repo/slim";
import {useEffect} from "react";
export default function Index() {
    useEffect(() => {
        console.log(Repo)
    }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
