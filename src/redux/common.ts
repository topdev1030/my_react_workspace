export type VisualState = {
  isLoading: boolean;
  errors?: string[];
};

export const defaultVisualState: VisualState = {
  isLoading: false,
  errors: [],
};
