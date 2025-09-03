import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AnalisisState {
  id: number;
  produto_pesquisado: string;
  local_id: number;
  empresa_id: number;
  indicador_id: number;
  score: string;
  margem_erro_invest: number;
  observacao: string;
  usuario_id: number;
  created_at: Date;
}

const initialState: AnalisisState[] = [];

export const analisisSlice = createSlice({
  name: "analisis",
  initialState,
  reducers: {
    pushAnalisis: (state, action: PayloadAction<AnalisisState>) => {
      state.push(action.payload);
    },
    popAnalisis: (state) => {
      state.pop();
    },
    clearAnalisisList: () => {
      return [];
    },
    removeAnalisisById: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateAnalisisById: (state, action: PayloadAction<AnalisisState>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { pushAnalisis, popAnalisis, clearAnalisisList, removeAnalisisById, updateAnalisisById } = analisisSlice.actions;
export const analisisReducer = analisisSlice.reducer;
