import { getData } from "@/utils/apiFun";
import { create } from "zustand";




const useStore = create(set => ({
    data:null,
    dataSave:async (d)=>{
        set({data:d})
    }
    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
}))

export default useStore