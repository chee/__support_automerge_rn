// import * as WebAssembly from "react-native-webassembly"
// globalThis.WebAssembly = WebAssembly
import {Platform} from "react-native"
import {automergeWasmBase64} from "@automerge/automerge/automerge.wasm.base64.js"
import {next as Automerge} from "@automerge/automerge/slim"
try {
	Automerge.initializeBase64Wasm(automergeWasmBase64)
} catch (error) {
	console.log("did i error?")
}

import {Repo} from "@automerge/automerge-repo/slim"
import {BrowserWebSocketClientAdapter} from "@automerge/automerge-repo-network-websocket"
import {IndexedDBStorageAdapter} from "@automerge/automerge-repo-storage-indexeddb"

import {Text, View} from "react-native"

import {useEffect, useState} from "react"

const idb = new IndexedDBStorageAdapter("txt")
const socky = new BrowserWebSocketClientAdapter("wss://galaxy.observer")
const network = [socky]
const storage = idb
const repo = new Repo({
	network,
	storage,
})
globalThis.repo = repo

export default function Index() {
	let [hello, setHello] = useState("nothing doing")
	useEffect(() => {
		;(async () => {
			await repo.networkSubsystem.whenReady()
			console.log("network ready")
			console.log("next", repo)
			const handle = repo.find("automerge:2f1xAA99WsX7DaZSNFxC2SBV8LgA")
			console.log(handle)
			console.log(handle.docSync())
			handle.doc().then(doc => {
				setHello(doc?.text ?? "nada")
				console.info(doc)
			})
		})()
	}, [])
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text>{hello}</Text>
		</View>
	)
}
