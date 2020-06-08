import {createSlice} from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
  name: 'image',
  initialState: {
    displayPic: [require("../Assets/defaultpicture.jpg")]
  },
  reducers: {
    ChangeDP: (state,action) => {
        state.displayPic = action.payload;
    }
  },
});

export default reducer;
export const {ChangeDP} = actions;

export const ChangeDPAction = data => {
    return dispatch =>{
        dispatch(ChangeDP(data))
    }
}