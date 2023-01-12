export type Action = {type:"ADD_AD", payload:string, payloadd:string}

export const addAd = (ad:string, soyadlar:string):Action => ({
    type: "ADD_AD",payload: ad,
    payloadd: soyadlar
});
