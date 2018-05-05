import axios from "axios";
let url =
  "https://api.backendless.com/17384A8E-923F-E3AF-FF78-BCF127957700/12209534-6BBE-B0F7-FFBA-F8C0634FF100/data/profiles?where=objectId%20%3D%20'4F0B7CD4-C93E-FC7E-FFD7-CA1E64E79600'&loadRelations=highlights";

const FetchProfile = () => {
  return {
    type: "GET_PROFILE",
    payload: axios.get(url)
  };
};

export { FetchProfile };
