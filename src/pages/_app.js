import { SessionProvider } from "next-auth/react"
import Bar from "@/component/bar";
import Header from "@/component/header";
import useStore from "@/state/store";
import "@/styles/globals.css";
import { getData } from "@/utils/apiFun";
import { Suspense, useEffect } from "react";

export default function App({Component, pageProps: { session, ...pageProps } }) {
  const {dataSave,data} = useStore()
  useEffect(()=>{
    (async function(){
      let openApi = await getData();
      dataSave(openApi);
    }())
  },[]);
  
  if(!data)return <>데이터가 곹들어와용...</>;

  return <>
    <SessionProvider session={session}>
      <Header/>
      <Component  {...pageProps} />
      <Bar/>
    </SessionProvider>
  </>
}


