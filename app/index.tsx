import { Text, View } from "react-native";
import { automergeWasmBase64 } from "@automerge/automerge/automerge.wasm.base64.js";
import { next as Automerge } from "@automerge/automerge/slim";
import { Repo } from "@automerge/automerge-repo/slim";
import {useEffect} from "react";
export default function Index() {
    useEffect(() => {
        console.log(automergeWasmBase64)
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
