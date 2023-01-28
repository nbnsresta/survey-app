export interface IFormField<T> {
  defaultValue?: T;
  onChange?: (value: T) => void;
}
