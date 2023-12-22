import create from 'zustand'

export const useCoasters = create((set, get) => ({
    coasters: [],
    loading: true,
    sea
}))

// forma corta: () => ({})
// forma larga: () => {
//    return {}
// }
