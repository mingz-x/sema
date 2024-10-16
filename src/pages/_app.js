import Bar from "@/component/bar";
import Header from "@/component/header";
import useStore from "@/state/store";
import "@/styles/globals.css";
import { getData } from "@/utils/apiFun";
import { Suspense, useEffect } from "react";

export default function App({Component, pageProps }) {
  const {dataSave,data} = useStore()
  useEffect(()=>{
    (async function(){
      let openApi = await getData();
      dataSave(openApi);
    }())
  },[]);
  
  if(!data)return <></>;

  return <>
    <Suspense fallback={<>준비중...</>}>
      <Header/>
      <Component  {...pageProps} />
      <Bar/>
    </Suspense>
  </>
}
