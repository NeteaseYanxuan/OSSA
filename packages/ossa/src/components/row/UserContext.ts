import { createContext } from 'react';
import { DataContextProps } from '../../../types/row';

export const DataContext: DataContextProps = createContext<DataContextProps>({});
