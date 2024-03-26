import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    SiteMapModalVisibility: false,
    authModal: false,
  },
  reducers: {
    setSiteModalVisibility(state) {
      state.SiteMapModalVisibility = !state.SiteMapModalVisibility;
    },
    setauthModal(state) {
      state.authModal = !state.authModal;
    },
  },
});
export default ModalSlice.reducer;
export const { setSiteModalVisibility, setauthModal } = ModalSlice.actions;
