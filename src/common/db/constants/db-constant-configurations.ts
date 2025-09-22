import { ColumnBigIntTransformer } from '../../transformers/big-int.transformer';
import { ColumnOptions } from "typeorm";

export const COLUMN_BIG_INT:ColumnOptions = {
    primary: true,
    type: 'bigint',
    transformer: new ColumnBigIntTransformer(),
    generated:true
  }
export const COLUMN_BIG_INT_NULL:ColumnOptions = {
    type: 'bigint',
    transformer: new ColumnBigIntTransformer(),
    nullable:true
  }
export const COLUMN_ONE_TO_ONE:ColumnOptions = {
    type: 'bigint',
    transformer: new ColumnBigIntTransformer(),
    primary: true,
  }